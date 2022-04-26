import { Injectable } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Action, State, StateContext } from '@ngxs/store';

import { DataStatus } from '@common/models';
import { UserPageStateModel } from '../models/users-state.types';
import { UserPageActions } from './user-page.actions';
import { UsersApiActions } from './users-api.actions';
import { UsersActions } from './users.actions';
import { STATE_TOKEN } from './users.state-tokens';

const initialState: UserPageStateModel = {
  status: DataStatus.IDLE,
};

@State({
  name: STATE_TOKEN.USER_PAGE,
  defaults: initialState,
})
@Injectable()
export class UserPageState {
  @Action(UsersActions.LoadDetailData)
  loadDetailData(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.LOADING });
  }

  @Action(UsersApiActions.LoadDetailSuccess)
  loadDetailSuccess(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });
  }

  @Action(UsersApiActions.LoadDetailFail)
  loadDetailFail(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });
  }

  @Action(UserPageActions.AddUser)
  addUser(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.PENDING });
  }

  @Action(UserPageActions.Cancel)
  cancel(context: StateContext<UserPageStateModel>) {
    return context.dispatch(new Navigate(['./']));
  }

  @Action(UsersApiActions.AddUserSuccess)
  addUserSuccess(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });

    return context.dispatch(new Navigate(['./']));
  }

  @Action(UsersApiActions.AddUserFail)
  addUserFail(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });
  }

  @Action(UsersApiActions.UpdateUserSuccess)
  updateUserSuccess(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });

    return context.dispatch(new Navigate(['./']));
  }

  @Action(UsersApiActions.UpdateUserFail)
  updateUserFail(context: StateContext<UserPageStateModel>) {
    context.patchState({ status: DataStatus.IDLE });
  }
}
