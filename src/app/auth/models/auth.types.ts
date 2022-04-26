import { SystemUser } from '@common/models';

export interface AuthStateModel {
  user: SystemUser | null;
  token: string | null;
}
