import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addAction} from './todo.actions';
import {tap} from 'rxjs/operators';

@Injectable()
export class ToDoEffects {

  constructor(private action$: Actions) {}

  logger$ = createEffect(() =>
    this.action$.pipe(
      ofType(addAction),
      tap(action =>
        console.log(action.type)
      )),
    { dispatch: false }
  );
}
