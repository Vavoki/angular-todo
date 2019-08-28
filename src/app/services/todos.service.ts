import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Todo } from '../models/todo.model';
@Injectable()
export class TodosService {

  constructor() { }

  public statusShowMy = false;

  public errTodos = '';
  public errTodosChaged = new BehaviorSubject<string>(this.errTodos);
  public errTodos$ = this.errTodosChaged.asObservable();

  public todos: Todo[] = [];
  public todosChaged = new BehaviorSubject<Todo[]>(this.todos);
  public todos$ = this.todosChaged.asObservable();

  public setTodos(todos: Todo[]) {
    this.todos = todos;
    this.todosChaged.next(this.todos);
  }

  public isChecked(todo: Todo) {
    let copy = this.todos.slice();
    copy = copy.map( item => item.id === todo.id ? todo : item);
    this.todos = copy;
    this.todosChaged.next(this.todos);
  }

  public addTodo(todo: Todo) {
    const copy = this.todos.slice();
    copy.push(todo);
    this.todos = copy;
    this.todosChaged.next(this.todos);
  }

  public deleteTodo(id: number) {
    let copy = this.todos.slice();
    copy = copy.filter(item => item.id !== id);
    this.todos = copy;
    this.todosChaged.next(this.todos);
  }

  public setErr(err: string) {
    this.errTodos = err;
    this.errTodosChaged.next(this.errTodos);
  }
}
