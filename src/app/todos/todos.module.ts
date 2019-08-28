import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { TodosService } from '../services/todos.service';
import { TodoDirective } from '../directive/todo.directive';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { UpperCaseTodosPipe } from '../pipes/upper-case-todos.pipe';
import { UserService } from '../services/user/user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { notificationConfig } from '../notificationConfig';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent,
    TodoDirective,
    AddTodoComponent,
    FilterTodosPipe,
    UpperCaseTodosPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [TodosService, UserService]
})
export class TodosModule { }
