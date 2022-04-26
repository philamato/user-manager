import { StateToken } from '@ngxs/store';

import { AuthStateModel } from '../models/auth.types';

const AUTH = new StateToken<AuthStateModel>('auth');

export const STATE_TOKEN = {
  AUTH,
};
