import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UsersSelectors } from '../store';

@Injectable({
  providedIn: 'root',
})
export class ValidUserGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | boolean {
    const id = Number(route?.params['id']);

    const isValidUser = this.store.selectSnapshot(UsersSelectors.isValidUserFn);

    return isValidUser(id);
  }
}
