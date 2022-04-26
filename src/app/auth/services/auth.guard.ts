import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Store } from '@ngxs/store';

import { AuthApiActions, AuthSelectors } from '../store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.can();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.can();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.can();
  }

  private can(): boolean {
    const authenticated = this.store.selectSnapshot<boolean>(
      AuthSelectors.selectIsLoggedIn
    );

    if (authenticated) {
      return true;
    }

    this.store.dispatch(new AuthApiActions.LoginRedirect());

    return false;
  }
}
