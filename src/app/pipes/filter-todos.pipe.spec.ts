import { FilterTodosPipe } from './filter-todos.pipe';
import { TestBed } from '@angular/core/testing';
import { UserService } from '../services/user/user.service';

beforeEach(() => {

  TestBed.configureTestingModule({
    providers: [
      UserService,
    ]
  });
});

describe('FilterTodosPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterTodosPipe();
    expect(pipe).toBeTruthy();
  });
});
