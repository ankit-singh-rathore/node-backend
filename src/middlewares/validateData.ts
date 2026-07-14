import {ZodError} from "zod";
import { Request, Response, NextFunction } from "express";
import { createUserSchema } from "../validations/userValidation";
import { orderSchema } from "../validations/orderValidation";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    // Only validate POST, PUT, and PATCH requests that have a body
    if (!['POST', 'PUT', 'PATCH'].includes(req.method)) {
        return next();
    }

    try {
        createUserSchema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                message: 'Validation failed',
                errors: error.issues
            });
        } else {
            res.status(500).json({
                message: 'Failed to validate user'
            });
        }
    }
};

export const validateOrder = (req: Request, res: Response, next: NextFunction) => {
    // Only validate POST, PUT, and PATCH requests that have a body
    if (!['POST', 'PUT', 'PATCH'].includes(req.method)) {
        return next();
    }

    try {
        orderSchema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                message: 'Validation failed',
                errors: error.issues
            });
        } else {
            res.status(500).json({
                message: 'Failed to validate order'
            });
        }
    }
};

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    // Only validate POST requests that have a body
    if (req.method !== 'POST') {
        return next();
    }

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: 'Validation failed',
                errors: [
                    {
                        path: ['email'],
                        message: 'Email is required'
                    },
                    {
                        path: ['password'],
                        message: 'Password is required'
                    }
                ]
            });
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({
            message: 'Failed to validate login'
        });
    }
};
