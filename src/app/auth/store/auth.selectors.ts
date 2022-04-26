import { Selector } from '@ngxs/store';

import { SystemUser } from '@common/models';
import { AuthStateModel } from '../models/auth.types';
import { STATE_TOKEN } from './auth.state-tokens';

export class AuthSelectors {
  @Selector([STATE_TOKEN.AUTH])
  static selectUser(state: AuthStateModel): SystemUser | null {
    return state?.user;
  }

  @Selector([AuthSelectors.selectUser])
  static selectUsername(user: SystemUser): string {
    return user?.name;
  }

  @Selector([STATE_TOKEN.AUTH])
  static selectToken(state: AuthStateModel): string | null {
    return state?.token;
  }

  @Selector([AuthSelectors.selectToken])
  static selectIsLoggedIn(token: string): boolean {
    return !!token;
  }
}
