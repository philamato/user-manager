import { User } from '@common/models';

export namespace UserPageActions {
  export class AddUser {
    static readonly type = '[Users Page] Add User';

    constructor(public payload: User) {}
  }

  export class UpdateUser {
    static readonly type = '[Users Page] Update User';

    constructor(public payload: User) {}
  }

  export class Cancel {
    static readonly type = '[Users Page] Cancel';
  }
}
