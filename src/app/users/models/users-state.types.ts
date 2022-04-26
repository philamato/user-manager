import { DataStatus, User } from '@common/models';

export interface UsersStateModel {
  users: User[];
}

export interface UserPageStateModel {
  status: DataStatus;
}
