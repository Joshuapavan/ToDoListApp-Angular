import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../_services/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  accountService = inject(Account);
  validationErrors: string[] = [];
  private router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  loginUser(){
    this.accountService.loginUser(this.loginForm.value).subscribe(
      {
        next: (user) => {
          console.log(`Welcome, ${user.username}`);
          this.router.navigateByUrl('home');
        }
      }
    );
  }

}
