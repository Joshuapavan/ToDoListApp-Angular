import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../_services/account';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  accountService = inject(Account);
  validationErrors: string[] = [];
  private router = inject(Router);
  private toastr = inject(ToastrService);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  loginUser(){
    this.accountService.loginUser(this.loginForm.value).subscribe(
      {
        next: (user) => {
          this.toastr.success(`Welcome back, ${user.username}`);
          this.router.navigateByUrl('/home');
        },
        error: _ => this.toastr.error('ughh, something went wrong.')
      }
    );
  }

}
