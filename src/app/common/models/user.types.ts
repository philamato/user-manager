import { UserGender } from './gender.types';
import { UserStatus } from './status.types';

export interface User {
  id?: number;
  name: string;
  email: string;
  gender: UserGender;
  status: UserStatus;
}

export interface SystemUser {
  name: string;
  email: string;
}
