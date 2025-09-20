import { LoginRequest } from '../models/LoginModel';

export const loginService = async (
  credentials: LoginRequest,
  signIn: (data: LoginRequest) => Promise<void>
) => {
  return await signIn(credentials);
};
