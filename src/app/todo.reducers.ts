import {createReducer, on} from '@ngrx/store';
import {Todo} from './todo';
import {addAction, deleteAction} from './todo.actions';


export interface AppState {
  todos: Todo[];
}

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addAction, (state, action) =>
    [...state, action.todo]
  ),
  on(deleteAction, (state, action) =>
    [...state.slice(0, action.index),
     ...state.slice(action.index + 1)]
  )
);

export const reducers = {
  todos: todoReducer
};


