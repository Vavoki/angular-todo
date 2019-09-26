import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FilterTodosPipe } from './pipes/filter-todos.pipe';
import { AppModule } from './app.module';
import { UserService } from './services/user/user.service';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodosComponent } from './todos/todos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataSource } from '@angular/cdk/collections';
import { DataStorageService } from './shared/api-creators';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TodosService } from './services/todos.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireModule,
      ],
      declarations: [
        AppComponent,
        FilterTodosPipe,
        TodoComponent,
        TodoListComponent,
        TodosComponent,
        HeaderComponent,
        FooterComponent,
        AddTodoComponent,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        UserService,
        AngularFireAuth,
        DataStorageService,
        HttpClient,
        HttpHandler,
        TodosService ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todoList'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todoList');
  });
});
