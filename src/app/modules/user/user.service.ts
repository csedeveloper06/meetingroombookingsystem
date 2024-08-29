
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (password: string, userData: TUser) => {
  const newUser = await User.create(userData);
  return newUser;
};

export const UserServices = {
  createUserIntoDB,
};
