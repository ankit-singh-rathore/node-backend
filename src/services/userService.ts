import User from "../models/User";
import { IUser } from "../models/User";
import bcrypt from 'bcrypt';

export const createUser = async (data: IUser) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }
  const user = await User.create(data);
  return user;
};
export function registerUser(body: any) {
    throw new Error('Function not implemented.');
}

