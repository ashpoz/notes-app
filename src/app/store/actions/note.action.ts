import { Action } from '@ngrx/store';
import { Note } from '../models/note.model';
export enum NoteActionType {
  SAVE_ITEM = '[Note] Save Note',
}
export class SaveItemAction implements Action {
  readonly type = NoteActionType.SAVE_ITEM;
  // save an optional payload
  constructor(public payload: Note) {}
}
export type NoteAction = SaveItemAction;