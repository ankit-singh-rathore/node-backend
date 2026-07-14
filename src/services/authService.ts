import bcrypt from 'bcrypt';
import User, { IUser } from '../models/User';

export const registerUser = async (data: IUser) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log("Original Password:", data.password); // Debug
  console.log("Hashed Password:", hashedPassword); // Log the hashed password for debugging
  const userData = {
    name: data.name,
    email: data.email,
    age: data.age,
    password: hashedPassword
  };
  console.log("userData before create:", userData); // Debug
  const user = await User.create(userData);
  console.log("User after create:", user); // Debug
  return user;
};
