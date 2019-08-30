import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { TodosService } from '../services/todos.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { UpperCaseTodosPipe } from '../pipes/upper-case-todos.pipe';
import { UserService } from '../services/user/user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PopupComponent } from '../components/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent,
    AddTodoComponent,
    PopupComponent,
    FilterTodosPipe,
    UpperCaseTodosPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),

    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [TodosService, UserService],
  entryComponents: [PopupComponent]
})
export class TodosModule { }
