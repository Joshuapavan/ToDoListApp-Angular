import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Account } from '../../_services/account';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, BsDropdownModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  accountService = inject(Account);
  private router = inject(Router);

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
    this.accountService.currentUser.set(null);
  }
}

