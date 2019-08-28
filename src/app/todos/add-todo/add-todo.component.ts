import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/api-creators';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  checkoutForm;

  constructor(private formBuilder: FormBuilder,
              private apiCreator: DataStorageService,
              private authService: UserService) {
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
    this.apiCreator.addTodo(newTodo);
    this.checkoutForm.reset();
  }
}
