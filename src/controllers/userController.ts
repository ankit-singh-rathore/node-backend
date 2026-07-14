import { Request, Response } from 'express';
import User from '../models/User';
import * as userService from '../services/userService';
import { getErrorResponse } from '../utils/errorHelper';

// CREATE USER
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json(user);

  } catch (error) {
    const { status, message } = getErrorResponse(error, 'Failed to create user');

    res.status(status).json({
      message
    });
  }
};


// GET USERS
export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.find();
    res.json(users);

  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch users'
    });
  }
};

//GET USER BY NAME
export const getUserByName = async (
  req: Request,
  res: Response
) : Promise <void> => {
  try {
    const user = await User.find({ name: req.params.name});   //use User.findOne() if you want to fetch only one user with the given name
    if (!user) {
      res.status(404).json({
        message: 'User not found'
      });
      return;
    }
    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).json({
      message: 'Failed to fetch user'
    });
  }
}

// UPDATE USER
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
   try {
    const user = await User.findByIdAndUpdate (req.params.id, req.body, { new: true });
    if (!user) {
      res.status(404).json({
        message: 'User not found'
      });
      return;
    }
    res.status(200).json(user);
   }
   catch (error) {
    res.status(500).json({
      message: 'Failed to update user'
    });
   }
};

// DELETE USER
export const deleteUser = async (
  req : Request,
  res : Response 
) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({
        message: 'User not found'
      });
      return;
    }
    res.status(200).json({
      message: 'User deleted successfully'
    });
  }
  catch (error){
    res.status(500).json({
      message: 'Failed to delete user'
    })
  }
};

