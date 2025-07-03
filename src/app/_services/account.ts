import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Account {
  user = signal<User | null>(null);
  baseUrl = environment.baseUrl;

  httpClient = inject(HttpClient);

  loginUser(model: any){
    return this.httpClient.post<User>( `${this.baseUrl}/accounts/login`,model).pipe(
      map( user => {
       if(user) {
         this.user.set(user);
         localStorage.setItem("user",JSON.stringify(user));
       }
       return user;
      })
    )
  }

}
