import { FilterTodosPipe } from './filter-todos.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { UserService } from '../services/user/user.service';
import { TodoListComponent } from '../todos/todo-list/todo-list.component';

beforeEach(() => {

  TestBed.configureTestingModule({
    declarations: [TodoListComponent],
    providers: [UserService]
});
});

describe('FilterTodosPipe', () => {
  it('create an instance', () => {
    inject([UserService], (injectService: UserService) => {
    const pipe = new FilterTodosPipe(injectService);
    expect(pipe).toBeTruthy(); });
  });
});
