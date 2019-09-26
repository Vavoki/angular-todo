import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { TodosComponent } from '../todos/todos.component';
import { TodoComponent } from '../todos/todo/todo.component';
import { AddTodoComponent } from '../todos/add-todo/add-todo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { todoAdd, todosArr, isChecked, deleteTodos, deletedTodoId } from '../../mock/todos';
import { Todo } from '../models/todo.model';

describe('TodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleNotificationsModule.forRoot(),
      ],
    declarations: [
        FilterTodosPipe,
        TodosComponent,
        TodoComponent,
        AddTodoComponent,
    ],
    providers: [
        TodosService,
    ]
  }));

  it('should be created', () => {
    const service: TodosService = TestBed.get(TodosService);
    expect(service).toBeTruthy();
  });

  it('should be addTodos', () => {
    const service: TodosService = TestBed.get(TodosService);
    let result: Todo[];
    result = [
      {
          user: 'wQo3rgE3fgZcSLnAcIjjr9ccB8i1',
          id: 1567084323179,
          title: 'sdd1',
          completed: true
      },
  ];
    service.addTodo(todoAdd);
    service.todosChaged.subscribe(todos => {
      expect(todos).toEqual(result);
    });
  });

  it('should set Todos', () => {
    const service: TodosService = TestBed.get(TodosService);
    const result: Todo[] = todosArr;
    service.setTodos(todosArr);
    service.todosChaged.subscribe(todos => {
      expect(todos).toBe(result);
    });
  });

  it('isChecked', () => {
    const service: TodosService = TestBed.get(TodosService);
    const result: Todo[] = isChecked;
    service.todos = todosArr;
    service.isChecked(todoAdd);
    service.todosChaged.subscribe(todos => {
      expect(todos).toEqual(result);
    });
  });

  it('deleted array', () => {
    const service: TodosService = TestBed.get(TodosService);
    const result: Todo[] = deleteTodos;
    service.todos = todosArr;
    service.deleteTodo(deletedTodoId);
    service.todosChaged.subscribe(todos => {
      expect(todos).toEqual(result);
    });
  });
});
