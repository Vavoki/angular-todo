import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private formBuilder: FormBuilder,
              private authService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
   }

  ngOnInit() {
  }

  onSubmit(data) {
    this.authService.login(data.email, data.password);
  }

}
