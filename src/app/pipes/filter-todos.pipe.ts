import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  constructor(private authService: UserService) {}
  transform(value: any, showMy: boolean): any {
    console.log(value, showMy, this.authService.userData.uid);
    const { uid } = this.authService.userData;
    if (showMy && uid) {
      return value.filter(item => item.user === uid);
    }
    return value;
  }

}
