import { Credentials } from '../models';

export namespace AuthPageActions {
  export class Login {
    static readonly type = '[Auth Page] Login';

    constructor(public payload: Credentials) {}
  }
}
