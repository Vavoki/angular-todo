import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';

const appRoute: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos',
    children: [
      { path: '', component: TodosComponent, pathMatch: 'full' },
      { path: ':id', component: TodoComponent },
    ]
  },
];

export const routing = RouterModule.forRoot(appRoute);

