import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { TodosService } from '../services/todos.service';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [TodosService]
})
export class TodosModule { }
