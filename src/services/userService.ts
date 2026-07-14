import User from "../models/User";
import { IUser } from "../models/User";
import { Request } from "express";

export const createUser = async (data: IUser) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }
  const user = await User.create(data);
  return user;
};

export const getUsers = async (req: Request) => {
  const page = parseInt((req.query.page as string) || "1") || 1;
  const limit = parseInt((req.query.limit as string) || "10") || 10;
  const skip = (page - 1) * limit;
  const total = await User.countDocuments();
  const totalPages = Math.ceil(total / limit);
  const users = await User.find().skip(skip).limit(limit).sort({ createdAt: -1 });
  return { limit, totalPages, current_page: page, users};
};
