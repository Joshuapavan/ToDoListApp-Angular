import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../_services/account';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  accountService = inject(Account);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  loginUser(){
    this.accountService.loginUser(this.loginForm.value).subscribe(
      {
        next: (user) => {
          console.log(`Welcome, ${user.username}`);
        }
      }
    );
  }

}
