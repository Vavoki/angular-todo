import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { DataStorageService } from 'src/app/shared/api-creators';
import { NotificationsService } from 'angular2-notifications';
import { notificationConfig } from '../../notificationConfig';
import { untilDestroyed } from 'ngx-take-until-destroy';
import * as jsPDF from 'jspdf';
import { UploadService } from 'src/app/services/uploads.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  @Input() public todo: Todo;
  @Input() public index: number;

  public notConfig = notificationConfig;
  public progress: { percentage: number } = { percentage: 0 };
  constructor(private dataStorage: DataStorageService,
              private todosService: TodosService,
              private notification: NotificationsService,
              private uploadService: UploadService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.uploadService.imgs$
    .pipe(untilDestroyed(this))
    .subscribe(url => {
      const dialogRef = this.dialog.open(PopupComponent, {
        width: '600px',
        data: {link: url}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
     });
  }
  ngOnDestroy() {

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

  onShare() {
      const doc = new jsPDF();
      doc.text(20, 20, `Todo #${this.todo.id}`);
      doc.text(20, 30, this.todo.title);
      this.uploadService.pushFileToStorage(doc.output('blob'), this.progress);
  }

}
