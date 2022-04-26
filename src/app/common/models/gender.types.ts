export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

export const GenderDataMap: Map<UserGender, string> = new Map<UserGender, string>([
  [UserGender.FEMALE, 'Female'],
  [UserGender.MALE, 'Male'],
]);
