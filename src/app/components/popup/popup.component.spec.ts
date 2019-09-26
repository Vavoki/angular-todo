// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { PopupComponent } from './popup.component';
// import { FilterTodosPipe } from 'src/app/pipes/filter-todos.pipe';
// import { TodosModule } from 'src/app/todos/todos.module';
// import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
// import { TodosComponent } from 'src/app/todos/todos.component';
// import { TodoComponent } from 'src/app/todos/todo/todo.component';
// import { AddTodoComponent } from 'src/app/todos/add-todo/add-todo.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SimpleNotificationsModule } from 'angular2-notifications';
// import { AngularFireModule } from '@angular/fire';
// import { environment } from 'src/environments/environment';
// import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
// import { TodosService } from 'src/app/services/todos.service';
// import { DataStorageService } from 'src/app/shared/api-creators';
// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { MatDialogRef } from '@angular/material/dialog';

// describe('PopupComponent', () => {
//   let component: PopupComponent;
//   let fixture: ComponentFixture<PopupComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         declarations: [
//             PopupComponent,
//             FilterTodosPipe,
//             TodosComponent,
//             TodoComponent,
//             AddTodoComponent
//           ],
//           imports: [
//             RouterTestingModule,
//             FormsModule,
//             ReactiveFormsModule,
//             SimpleNotificationsModule.forRoot(),
//             AngularFireModule.initializeApp(environment.firebase),
//             AngularFireAuthModule,
//           ],
//           providers: [
//             TodosService,
//             AngularFireAuth,
//             DataStorageService,
//             HttpClient,
//             HttpHandler,
//             MatDialogRef
//         ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PopupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
