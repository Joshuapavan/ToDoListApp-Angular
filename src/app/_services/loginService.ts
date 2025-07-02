import { Injectable, signal } from '@angular/core';
import { Account } from '../_models/Account'

@Injectable({
  providedIn: 'root'
})
export class loginService {
  accounts = signal<Account[] | null>(null);
  currentAccount = signal<Account | null>(null);
}
