import { Selector } from '@ngxs/store';

import { DataStatus } from '@common/models';
import { UserPageStateModel } from '../models';
import { STATE_TOKEN } from './users.state-tokens';

export class UserPageSelectors {
  @Selector([STATE_TOKEN.USER_PAGE])
  static selectStatus(state: UserPageStateModel): DataStatus {
    return state?.status;
  }

  @Selector([UserPageSelectors.selectStatus])
  static selectIsPending(status: DataStatus): boolean {
    return status === DataStatus.PENDING;
  }
}
