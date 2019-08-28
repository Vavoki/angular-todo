import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { api, httpOptions} from '../api.config';
import {  Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';
import { Observable } from 'rxjs';

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
        err => this.todosService.setErr(err.message)
      );
  }

  public changeTodo(todo: Todo) {
     this.httpClient.put<Todo>(`${api}/todos/${todo.id}`, todo, httpOptions)
      .subscribe(
        (changedTodo: Todo) => {
          this.todosService.isChecked(changedTodo);
        },
        err => console.log(err)
      );
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${api}/todos`, todo, httpOptions);
  }

  public deleteTodo(id: number): Observable<{}> {
    return this.httpClient.delete(`${api}/todos/${id}`, httpOptions);
  }

  public searchTodo(title: string) {
     this.httpClient.get<Todo[]>(`${api}/todos?title=${title}`, httpOptions)
      .subscribe(
        (todo: Todo[]) =>  {
          this.todosService.setTodos(todo);
        }
      );
  }
}
