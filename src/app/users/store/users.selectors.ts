import { User } from '@common/models';
import { Selector } from '@ngxs/store';

import { UsersStateModel } from '../models';
import { STATE_TOKEN } from './users.state-tokens';

export class UsersSelectors {
  @Selector([STATE_TOKEN.USERS])
  static selectUsers(state: UsersStateModel): User[] {
    return state?.users;
  }

  @Selector([UsersSelectors.selectUsers])
  static selectUserByIdFn(users: User[]): (id: number) => undefined | User {
    return (id: number): undefined | User =>
      users.find((user: User) => user.id === id);
  }

  @Selector([UsersSelectors.selectUserByIdFn])
  static isValidUserFn(
    selectUserById: (id: number) => undefined | User
  ): (id: number) => boolean {
    return (id: number): boolean => (selectUserById(id) ? true : false);
  }
}
