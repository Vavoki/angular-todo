import { Component, OnInit } from '@angular/core';

import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    console.log(this.todoService.errTodos);
  }

  onChangeStatusShowMy(values: any) {
    this.todoService.statusShowMy = values.currentTarget.checked;
  }
}
