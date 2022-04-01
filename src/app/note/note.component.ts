import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { startWith, debounceTime, skip } from 'rxjs/operators';
import { Observable } from 'rxjs';

import EditorJS from '@editorjs/editorjs';
import { editorjsConfig } from '../../note-editor.config';

@UntilDestroy()
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  editorData: any;
  editor: EditorJS;
  editorObserver: MutationObserver;

  constructor() { }

  ngOnInit(): void {
    
    this.editor = new EditorJS(editorjsConfig)
  
    this.detectEditorChanges().pipe(
      debounceTime(200),
      skip(1),
      untilDestroyed(this)
    ).subscribe(data=>{
      this.editor.save().then((outputData)=>{
        this.editorData =  JSON.stringify(outputData, null, 2);
      });
    });
  }

  saveEditorData() : void {
    this.editor.save().then((outputData) => {
      this.editorData =  JSON.stringify(outputData, null, 2);
    })
  }

  ngOnDestroy(): void {
    this.editorObserver.disconnect();
  }

  detectEditorChanges(): Observable <any> {

    return new Observable(observer => {

      const editorDom = document.querySelector('#editorjs');
      const config = { attributes: true, childList: true, subtree: true };

      this.editorObserver = new MutationObserver((mutation) => {
        observer.next(mutation);
      })

      this.editorObserver.observe(editorDom!, config);

    })
  }
}