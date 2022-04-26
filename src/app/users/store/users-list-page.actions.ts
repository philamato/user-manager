export namespace UsersListPageActions {
  export class AddUser {
    static readonly type = '[Users List Page] Add User';
  }

  export class EditUser {
    static readonly type = '[Users List Page] Edit User';

    constructor(public payload: { id: number }) {}
  }

  export class DeleteUser {
    static readonly type = '[Users Page] Delete User';

    constructor(public payload: { id: number }) {}
  }
}
