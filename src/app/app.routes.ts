import { Routes } from '@angular/router';
import { Login } from './_components/login/login';
import { Register } from './_components/register/register';
import { Home } from './_components/home/home';

export const routes: Routes = [
    { path: "login", component: Login },
    { path: 'register', component: Register },
    { path: 'home', component: Home }
];
