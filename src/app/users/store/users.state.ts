import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { DataResponse, User } from '@common/models';
import { UsersStateModel } from '../models/users-state.types';
import { UsersService } from '../services/users.service';
import { UsersListPageActions } from './users-list-page.actions';
import { UserPageActions } from './user-page.actions';
import { UsersApiActions } from './users-api.actions';
import { UsersActions } from './users.actions';
import { STATE_TOKEN } from './users.state-tokens';

const initialState: UsersStateModel = {
  users: [],
};

@State({
  name: STATE_TOKEN.USERS,
  defaults: initialState,
})
@Injectable()
export class UsersState {
  @Action(UsersActions.LoadListData)
  loadListData(context: StateContext<UsersStateModel>) {
    return this.service.getAll$().pipe(
      tap((users: User[]) => {
        context.setState({ users });

        return context.dispatch(new UsersApiActions.LoadListSuccess());
      })
    );
  }

  @Action(UsersActions.LoadDetailData)
  loadDetailData(
    context: StateContext<UsersStateModel>,
    action: UsersActions.LoadDetailData
  ) {
    const { id }: { id: number } = action.payload;

    return this.service.get$(id).pipe(
      tap((user: User) => {
        const state = context.getState();

        let matchingUserById: User | undefined = state.users.find(
          (u: User) => u.id === id
        );

        if (matchingUserById) {
          let users: User[];

          [matchingUserById, ...users] = state.users;

          context.patchState({ users: [user, ...users] });

          return context.dispatch(new UsersApiActions.LoadDetailSuccess());
        }

        context.patchState({ users: [user, ...state.users] });

        return context.dispatch(new UsersApiActions.LoadDetailFail());
      })
    );
  }

  @Action(UsersListPageActions.DeleteUser)
  deleteUser(
    context: StateContext<UsersStateModel>,
    action: UsersListPageActions.DeleteUser
  ) {
    const { id }: { id: number } = action.payload;

    return this.service.delete$(id).pipe(
      tap((response: DataResponse) => {
        if (response === DataResponse.SUCCESS) {
          return context.dispatch([
            new UsersActions.LoadListData(),
            new UsersApiActions.DeleteUserSuccess(),
          ]);
        }

        return context.dispatch(new UsersApiActions.DeleteUserFail());
      })
    );
  }

  @Action(UserPageActions.AddUser)
  addUser(
    context: StateContext<UsersStateModel>,
    action: UserPageActions.AddUser
  ) {
    const user: User = action.payload;

    return this.service.add$(user).pipe(
      tap((response: User) => {
        if (response) {
          return context.dispatch(new UsersApiActions.AddUserSuccess());
        }

        return context.dispatch(new UsersApiActions.AddUserFail());
      })
    );
  }

  @Action(UserPageActions.UpdateUser)
  updateUser(
    context: StateContext<UsersStateModel>,
    action: UserPageActions.UpdateUser
  ) {
    const user: User = action.payload;

    return this.service.update$(user).pipe(
      tap((response: User) => {
        if (response) {
          return context.dispatch(new UsersApiActions.UpdateUserSuccess());
        }

        return context.dispatch(new UsersApiActions.UpdateUserFail());
      })
    );
  }

  constructor(private service: UsersService) {}
}
