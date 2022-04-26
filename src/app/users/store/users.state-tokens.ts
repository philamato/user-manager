import { StateToken } from '@ngxs/store';

import { UserPageStateModel, UsersStateModel } from '../models/users-state.types';

const USERS = new StateToken<UsersStateModel>('core_users');
const USERS_LIST_PAGE = new StateToken<UserPageStateModel>('page_users_list');
const USER_PAGE = new StateToken<UserPageStateModel>('page_user');

export const STATE_TOKEN = {
  USERS,
  USERS_LIST_PAGE,
  USER_PAGE,
};
