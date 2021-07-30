import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces';

@Injectable()
export class UserService {

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) { }

  login(email: string, password: string): void {
    setTimeout(() => {
      this.user = {
        email,
        firstName: 'Pesho',
        lastName: 'Peshev'
      }
    }, 1000);
  }

  logout(): void {
    setTimeout(() => {
      this.user = undefined;
    }, 1000)
  }
}
