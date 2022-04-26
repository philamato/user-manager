export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export const StatusDataMap: Map<UserStatus, string> = new Map<
  UserStatus,
  string
>([
  [UserStatus.ACTIVE, 'Active'],
  [UserStatus.INACTIVE, 'Inactive'],
]);
