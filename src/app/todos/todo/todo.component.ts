import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { DataStorageService } from 'src/app/shared/api-creators';
import { NotificationsService } from 'angular2-notifications';
import { notificationConfig } from '../../notificationConfig';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() public todo: Todo;
  @Input() public index: number;
  notConfig = notificationConfig;
  constructor(private dataStorage: DataStorageService,
              private todosService: TodosService,
              private notification: NotificationsService) { }

  ngOnInit() {
  }

  fieldsChange(values: any) {
    this.todo.completed = values.currentTarget.checked;
    this.dataStorage.changeTodo(this.todo);
  }

  onEditeTodo(value) {
    this.todo.title = value.target.value;
    this.dataStorage.changeTodo(this.todo);
    this.notConfig.title = 'Todos';
    this.notConfig.content = 'todo has been updated';
    this.notification.alert(this.notConfig.title, this.notConfig.content, this.notConfig);

  }

  onDelete() {
    this.dataStorage.deleteTodo(this.todo.id)
    .subscribe(
      () => {
        this.todosService.deleteTodo(this.todo.id);
        this.notConfig.title = 'Todos';
        this.notConfig.content = 'todo has been deleted';
        this.notification.warn(this.notConfig.title, this.notConfig.content, this.notConfig);
      },
      err => {
        this.notConfig.title = 'Todos';
        this.notConfig.content = err.message;
        this.notification.error(this.notConfig.title, this.notConfig.content, this.notConfig);
      }
    );
  }

}
