import { AuthState } from './auth.state';

export * from './auth-api.actions';
export * from './auth-page.actions';
export * from './auth.actions';
export * from './auth.selectors';
export { STATE_TOKEN as AUTH_STATE_TOKEN } from './auth.state-tokens';

export const store = [AuthState];
