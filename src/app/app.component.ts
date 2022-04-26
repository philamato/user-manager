import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AuthActions, AuthSelectors } from '@auth/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(AuthSelectors.selectIsLoggedIn)
  authenticated$!: Observable<boolean>;

  constructor(private store: Store) {}

  handleLogout(): void {
    this.store.dispatch(new AuthActions.Logout());
  }
}
