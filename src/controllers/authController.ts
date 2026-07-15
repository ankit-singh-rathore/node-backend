import { Request, Response } from 'express';
import User from '../models/User';
import * as authService from '../services/authService';
import { getErrorResponse } from '../utils/errorHelper';
import { log } from 'console';
import bcrypt from 'bcrypt';
//REGISTER USER
export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json(user);

  } catch (error) {
    const { status, message } = getErrorResponse(error, 'Failed to register user');

    res.status(status).json({
      message
    });
  }
}

//LOGIN USER
export const login = async (
  req : Request,
  res: Response
) : Promise<void> => {
  try {
    const { email, password } = req.body;
    log("Login request received with email:", email , password); // Debug
    const user = await User.findOne({ email });
    log("User found in database:", user); // Debug
    if (!user) {
      res.status(404).json({
        message: 'User not found'
      });
      return;
    }
    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    log("Password validation result:", isPasswordValid); // Debug
    if (!isPasswordValid) {
      res.status(401).json({
        message: 'Invalid password'
      });
      return;
    }
    log("Login successful for user:", user); // Debug
    res.status(200).json({
      message: 'Login successful',
      user
    });
  }
  catch (error) {
    res.status(500).json({
      message: 'Failed to login user'
    });
  }
};

export const uploadProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({
        message: 'No file uploaded'
      });
      return;
    }

    console.log(req.file);

    res.json({
        file: req.file
    })
  }
  catch (error) {
    res.status(500).json({
      message: 'Failed to upload profile image'
    });
  }
};