export namespace AuthApiActions {
  export class AccessDenied {
    static readonly type = '[Auth/API] Access Denied';
  }

  export class LoginRedirect {
    static readonly type = '[Auth/API] Login Redirect';
  }
}
