import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/api-creators';
import { UserService } from 'src/app/services/user/user.service';
import { NotificationsService } from 'angular2-notifications';
import { notificationConfig } from '../../notificationConfig';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  checkoutForm;
  notConfig = notificationConfig;

  constructor(private formBuilder: FormBuilder,
              private todosService: TodosService,
              private apiCreator: DataStorageService,
              private authService: UserService,
              private _notifications: NotificationsService) {
    this.checkoutForm = this.formBuilder.group({
       todo: '',
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(data) {
    const newTodo = {
      user: this.authService.user.uid,
      id: Date.now(),
      title: data.todo,
      completed: false
    };
    this.apiCreator.addTodo(newTodo)
    .subscribe(
      (todo: Todo) => {
          this.todosService.addTodo(todo);
          this.notConfig.title = 'Todos';
          this.notConfig.content = 'todo has been added';
          this._notifications.success(this.notConfig.title,
                                      this.notConfig.content,
                                      this.notConfig);
            },
      (err) =>  {
        this.notConfig.title = 'Todos';
        this.notConfig.content = err.message;
        this._notifications.error(this.notConfig.title,
                                    this.notConfig.content,
                                    this.notConfig);
      }
    );
    this.checkoutForm.reset();
  }
}
