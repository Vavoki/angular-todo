import { UpperCaseTodosPipe } from './upper-case-todos.pipe';

describe('UpperCaseTodosPipe', () => {
  it('create an instance', () => {
    const pipe = new UpperCaseTodosPipe();
    expect(pipe).toBeTruthy();
  });
});
