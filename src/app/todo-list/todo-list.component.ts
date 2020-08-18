import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Todo} from '../todo';
import {Observable} from 'rxjs';
import {deleteAction} from '../todo.actions';
import {AppState} from '../todo.reducers';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {
  todo$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todo$ = store.pipe(select(state => state.todos));
  }

  delete(i: number): void {
    this.store.dispatch(deleteAction({index: i}));
  }
}
