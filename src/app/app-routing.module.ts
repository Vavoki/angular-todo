import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const appRoute: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TodosComponent, pathMatch: 'full' },
      { path: ':id', component: TodoComponent },
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute),
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})

export class AppRoutingModule {}

