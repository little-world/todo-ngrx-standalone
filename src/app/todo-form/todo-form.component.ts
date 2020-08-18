import { Component, OnInit } from '@angular/core';
import {addAction} from '../todo.actions';
import {Todo} from '../todo';
import {Store} from '@ngrx/store';
import {AppState} from '../todo.reducers';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent  {
  todo = new Todo();

  constructor(private store: Store<AppState>) {}

  add(): void {
    this.store.dispatch(addAction({todo: this.todo}));
    this.todo = new Todo();
  }
}
