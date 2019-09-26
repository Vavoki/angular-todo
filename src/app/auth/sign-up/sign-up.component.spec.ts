import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FilterTodosPipe } from 'src/app/pipes/filter-todos.pipe';
import { TodosComponent } from 'src/app/todos/todos.component';
import { TodoComponent } from 'src/app/todos/todo/todo.component';
import { AddTodoComponent } from 'src/app/todos/add-todo/add-todo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { TodosService } from 'src/app/services/todos.service';
import { DataStorageService } from 'src/app/shared/api-creators';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignUpComponent,
        FilterTodosPipe,
        TodosComponent,
        TodoComponent,
        AddTodoComponent
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
        AngularFireAuth,
        DataStorageService,
        HttpClient,
        HttpHandler,
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be click submit', () => {
    spyOn(component, 'onSubmit');
    const btn = fixture.debugElement.nativeElement.querySelector('button');
    btn.click();
    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });

});
