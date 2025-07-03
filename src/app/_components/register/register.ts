import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Account } from '../../_services/account';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  accountService = inject(Account);
  private toastr = inject(ToastrService);

  registerForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }
  )

  registerUser(){
    this.accountService.registerUser(this.registerForm.value).subscribe({
      next: user =>  this.toastr.info(`Welcome, ${user.username}!`),
      error: _ => this.toastr.error('ughh, something went wrong.')
    })
  }

}
