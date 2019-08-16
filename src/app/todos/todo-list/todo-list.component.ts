import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodosService } from 'src/app/services/todos.service';
import { DataStorageService } from 'src/app/shared/data-storage';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private dataStorage: DataStorageService,
              public todosService: TodosService) { }

  ngOnInit() {
    this.dataStorage.getTodos();
  }

}
