import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

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
    this.authService.register(data.email, data.password);
  }

}
