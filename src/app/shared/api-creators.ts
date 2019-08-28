import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

// import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
import { api, httpOptions} from '../api.config';
import {  Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';

@Injectable()

export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private todosService: TodosService) {}

  public getTodos() {
    this.httpClient.get<Todo[]>(`${api}/todos`, httpOptions)
      .subscribe(
        (todos: Todo[]) => {
          this.todosService.setTodos(todos);
        },
        err => this.todosService.setErr(err)
      );
  }

  public changeTodo(todo: Todo) {
    return this.httpClient.put<Todo>(`${api}/todos/${todo.id}`, todo, httpOptions)
      .subscribe(
        (changedTodo: Todo) => {
          this.todosService.isChecked(changedTodo);
        },
        err => console.log(err)
      );
  }

  public addTodo(todo: Todo) {
    return this.httpClient.post<Todo>(`${api}/todos`, todo, httpOptions)
      .subscribe(
        (newTodo: Todo) => {
            this.todosService.addTodo(newTodo);
        },
        err => console.log(err)
      );
  }

  public deleteTodo(id: number) {
    return this.httpClient.delete(`${api}/todos/${id}`, httpOptions)
      .subscribe(
        () => {
          this.todosService.deleteTodo(id);
        },
        err => console.log(err)
      );
  }

  public searchTodo(title: string) {
    return this.httpClient.get<Todo[]>(`${api}/todos?title=${title}`, httpOptions)
      .subscribe(
        (todo: Todo[]) =>  {
          console.log(todo);
          this.todosService.getTodos(todo);
        }
      );
  }
}
