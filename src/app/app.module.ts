import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {StoreModule} from '@ngrx/store';
import {reducers, todoReducer} from './todo.reducers';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {ToDoEffects} from './todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(ToDoEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
