export namespace UsersApiActions {
  export class LoadListSuccess {
    static readonly type = '[Users/API] Load List Success';
  }

  export class LoadDetailSuccess {
    static readonly type = '[Users/API] Load Detail Success';
  }

  export class LoadDetailFail {
    static readonly type = '[Users/API] Load Detail Fail';
  }

  export class AddUserSuccess {
    static readonly type = '[Users/API] Add User Success';
  }

  export class AddUserFail {
    static readonly type = '[Users/API] Add User Fail';
  }

  export class UpdateUserSuccess {
    static readonly type = '[Users/API] Update User Success';
  }

  export class UpdateUserFail {
    static readonly type = '[Users/API] Update User Fail';
  }

  export class DeleteUserSuccess {
    static readonly type = '[Users/API] Delete User Success';
  }

  export class DeleteUserFail {
    static readonly type = '[Users/API] Delete User Fail';
  }
}
