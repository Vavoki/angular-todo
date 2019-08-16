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
   return this.httpClient.get<Todo[]>(`${api}/todos`, httpOptions)
    .subscribe(
      (todos: Todo[]) => {
        this.todosService.getTodos(todos);
      }
    );
  }

  public changeTodo(todo: Todo) {
    return this.httpClient.put<Todo>(`${api}/todos/${todo.id}`, todo, httpOptions)
      .subscribe(
        (changedTodo: Todo) => {
          this.todosService.isChecked(changedTodo);
        }
      );
  }
}
