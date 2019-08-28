import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseTodos'
})
export class UpperCaseTodosPipe implements PipeTransform {

  // tslint:disable-next-line: variable-name
  transform(value: any, args?: any): any {
    const newArray = value.map(item =>
      ({userId: item.userId,
        id: item.id,
        title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
        completed: item.completed}));
    return newArray;
  }
}
