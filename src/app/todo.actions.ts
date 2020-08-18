import {createAction, props} from '@ngrx/store';
import {Todo} from './todo';

export const addAction = createAction(
  '[Todo Component] Add',
  props<{todo: Todo}>()
);

export const deleteAction = createAction(
  '[Todo Component] Delete',
  props<{index: number}>()
);
