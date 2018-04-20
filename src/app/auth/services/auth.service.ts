import { Injectable } from '@angular/core';

import { Authenticate, User } from '../models/user';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {throwError} from 'rxjs/index';

@Injectable()
export class AuthService {
  constructor() {}

  login({ username, password }: Authenticate): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test') {
      return throwError('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
