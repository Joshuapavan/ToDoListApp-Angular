import { Routes } from '@angular/router';
import { Login } from './_components/login/login';
import { Register } from './_components/register/register';
import { Home } from './_components/home/home';
import { Todos } from './_components/todos/todos';

export const routes: Routes = [
    { path: "", component: Login },
    { path: "login", component: Login },
    { path: 'register', component: Register },
    { path: 'home', component:  Home },
    { path: 'todos', component:  Todos },
];
