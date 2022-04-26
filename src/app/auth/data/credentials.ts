import { SystemUser } from '@common/models';
import { Credentials } from '../models';

export const adminCredentials: Credentials = {
  email: 'admin@anycompany.com',
  password: 'password',
};

export const adminUser: SystemUser = {
  name: 'Admin',
  email: 'admin@anycompany.com',
};
