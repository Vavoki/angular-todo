// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';
// import { TodoComponent } from 'src/app/todos/todo/todo.component';
// import { FilterTodosPipe } from 'src/app/pipes/filter-todos.pipe';
// import { TodosModule } from 'src/app/todos/todos.module';
import { TodosService } from 'src/app/services/todos.service';
import { LoginComponent } from './login.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosModule } from 'src/app/todos/todos.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FilterTodosPipe } from 'src/app/pipes/filter-todos.pipe';
import { TodosComponent } from 'src/app/todos/todos.component';
import { TodoComponent } from 'src/app/todos/todo/todo.component';
import { AddTodoComponent } from 'src/app/todos/add-todo/add-todo.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { DataStorageService } from 'src/app/shared/api-creators';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be click', () => {
    spyOn(component, 'onSubmit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });

});
