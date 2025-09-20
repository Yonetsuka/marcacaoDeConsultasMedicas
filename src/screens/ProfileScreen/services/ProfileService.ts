import { User } from '../models/UserModel';

export const profileService = {
  updateProfile: async (user: User) => {
    // Aqui entraria chamada à API para atualizar perfil
    return Promise.resolve(user);
  },
};
