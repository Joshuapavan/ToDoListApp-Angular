import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { Account } from './_services/account';
import { User } from './_models/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  accountService = inject(Account);
  private router = inject(Router);
  user = signal<User | null>(null);
  localStorageItem: any;
  

  ngOnInit(): void {
    this.isUserPresent()
  }

  isUserPresent(){
    this.localStorageItem = localStorage.getItem('user');
    if(this.localStorageItem != null){
      this.user.set(JSON.parse(this.localStorageItem))
      this.accountService.currentUser.set(this.user());
      this.router.navigateByUrl('home');
      if(!this.accountService.currentUser()){
        this.router.navigateByUrl('login');
      }
    }
  }
}
