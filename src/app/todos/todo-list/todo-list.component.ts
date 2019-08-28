import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { TodosService } from 'src/app/services/todos.service';
import { DataStorageService } from 'src/app/shared/api-creators';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  err: String = '';

  constructor(private dataStorage: DataStorageService,
              public todosService: TodosService,
              private authService: UserService) { }

  ngOnInit() {
   this.dataStorage.getTodos();
   this.todosService.errTodos$
    .pipe(untilDestroyed(this))
    .subscribe(err => { this.err = err; });
  }
  public ngOnDestroy() {

  }

}
