import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { FilterTodosPipe } from 'src/app/pipes/filter-todos.pipe';
import { TodosModule } from '../todos.module';
import { AppModule } from 'src/app/app.module';
import { TodoComponent } from '../todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TodosService } from 'src/app/services/todos.service';
import { DataStorageService } from 'src/app/shared/api-creators';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddTodoComponent,
        FilterTodosPipe,
        TodoComponent,
    ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleNotificationsModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
    ],
      providers: [
        TodosService,
        DataStorageService,
        HttpClient,
        HttpHandler,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
