export namespace UsersActions {
  export class LoadListData {
    static readonly type = '[Users] Load List Data';
  }

  export class LoadDetailData {
    static readonly type = '[Users] Load Detail Data';

    constructor(public payload: { id: number }) {}
  }
}
