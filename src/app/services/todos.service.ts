import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Todo } from '../models/todo.model';
@Injectable()
export class TodosService {

  constructor() { }

  public todos: Todo[] = [];
  public todosChaged = new BehaviorSubject<Todo[]>(this.todos);
  public todos$ = this.todosChaged.asObservable();

  public getTodos(todos: Todo[]) {
    this.todos = todos;
    this.todosChaged.next(this.todos);
  }

  public isChecked(todo: Todo) {
    let copy = this.todos.slice();
    copy = copy.map( item => item.id === todo.id ? todo : item);
    this.todos = copy;
    this.todosChaged.next(this.todos);
  }
}
