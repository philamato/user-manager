import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SystemUser } from '@common/models';
import { AuthStateModel, Credentials } from '../models';
import { adminCredentials, adminUser } from '../data/credentials';
import { token } from '../data/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login$(credentials: Credentials): Observable<AuthStateModel | null> {
    if (JSON.stringify(credentials) === JSON.stringify(adminCredentials)) {
      const user: SystemUser = adminUser;

      return of({
        user,
        token,
      });
    }

    return of(null);
  }
}
