import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { DataStorageService } from 'src/app/shared/api-creators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() public todo: Todo;
  @Input() public index: number;
  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() {
  }

  fieldsChange(values: any) {
    this.todo.completed = values.currentTarget.checked;
    this.dataStorage.changeTodo(this.todo);
  }
  onDelete() {
    this.dataStorage.deleteTodo(this.todo.id);
  }

}
