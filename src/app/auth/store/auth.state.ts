import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { AuthStateModel, Credentials } from '../models';
import { AuthApiActions } from './auth-api.actions';
import { AuthPageActions } from './auth-page.actions';
import { AuthActions } from './auth.actions';
import { STATE_TOKEN } from './auth.state-tokens';
import { AuthService } from '@auth/services/auth.service';
import { tap } from 'rxjs/operators';

const initialState: AuthStateModel = {
  token: null,
  user: null,
};

@State<AuthStateModel>({
  name: STATE_TOKEN.AUTH,
  defaults: initialState,
})
@Injectable()
export class AuthState {
  @Action(AuthPageActions.Login)
  login(context: StateContext<AuthStateModel>, action: AuthPageActions.Login) {
    const credentials: Credentials = action.payload;

    return this.service.login$(credentials).pipe(
      tap((response: AuthStateModel | null) => {
        if (response) {
          context.setState(response);

          context.dispatch(new Navigate(['./']));
        }
      })
    );
  }

  @Action(AuthApiActions.LoginRedirect)
  loginRedirect(context: StateContext<AuthStateModel>) {
    return context.dispatch(new Navigate(['./login']));
  }

  @Action(AuthActions.Logout)
  logout(context: StateContext<AuthStateModel>) {
    context.setState(initialState);

    return context.dispatch(new Navigate(['./login']));
  }

  @Action(AuthApiActions.AccessDenied)
  accessDenied(context: StateContext<AuthStateModel>) {
    return context.dispatch(new Navigate(['/']));
  }

  constructor(private service: AuthService) {}
}
