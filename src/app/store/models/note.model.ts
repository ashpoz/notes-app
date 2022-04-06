import { NoteItem } from "./noteItem.model";

export interface Note {
  id: string;
  title: string;
  items: NoteItem;
}