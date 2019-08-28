import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/api-creators';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm;
  constructor(private apiCreators: DataStorageService,
              private formBuilder: FormBuilder,
              private authService: UserService) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    if (data.search) {
      this.apiCreators.searchTodo(data.search);
    } else {
      this.apiCreators.getTodos();
    }
    this.searchForm.reset();
  }

  onLogout() {
    console.log('click');
    this.authService.logout();
  }
}
