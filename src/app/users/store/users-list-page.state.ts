import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, State, StateContext } from '@ngxs/store';

import { DataStatus } from '@common/models';
import { UserPageStateModel } from '../models/users-state.types';
import { UsersApiActions } from './users-api.actions';
import { UsersListPageActions } from './users-list-page.actions';
import { UsersActions } from './users.actions';
import { STATE_TOKEN } from './users.state-tokens';

const initialState: UserPageStateModel = {
  status: DataStatus.IDLE,
};

@State({
  name: STATE_TOKEN.USERS_LIST_PAGE,
  defaults: initialState,
})
@Injectable()
export class UsersListPageState {
  @Action(UsersActions.LoadListData)
  loadListData(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.LOADING });
  }

  @Action(UsersApiActions.LoadDetailSuccess)
  loadDetailSuccess(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });
  }

  @Action(UsersListPageActions.AddUser)
  addUser(context: StateContext<any>) {
    return context.dispatch(new Navigate(['user/create']));
  }

  @Action(UsersListPageActions.DeleteUser)
  deleteUser(context: StateContext<any>) {
    context.patchState({ status: DataStatus.UPDATING });
  }

  @Action(UsersApiActions.DeleteUserSuccess)
  deleteUserSuccess(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });
  }

  @Action(UsersApiActions.DeleteUserFail)
  deleteUserFail(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });
  }
}
