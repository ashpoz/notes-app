// import the interface
import { Note } from '../models/note.model';

import { NoteAction, NoteActionType } from '../actions/note.action';
//create a dummy initial state
const initialState: Array<Note> = [
  {
    id: '1',
    title: 'New Note',
    items: [],
  },
];
export function noteReducer(
  state: Array<Note> = initialState,
  action: NoteAction
) {
  switch (action.type) {
    case NoteActionType.SAVE_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}