import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginService } from '../../_services/loginService'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginService = inject(loginService);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  loginUser(){
    
  }

}
