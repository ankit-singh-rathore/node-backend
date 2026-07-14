import {Request, Response} from 'express';
import Order from '../models/OrderModel';
import { orderSchema } from '../validations/orderValidation';
import { ZodError } from "zod";

// CREATE ORDER
export const createOrder = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const validatedData = orderSchema.parse(req.body);
        const order = await Order.create(validatedData);
        res.status(201).json(order);
    }
    catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                message: 'Validation failed',
                errors: error.issues
            });
        } else {
            res.status(500).json({
                message: 'Failed to create order'
            });
        }
    }
};

// GET ORDERS
export const getOrders =async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const orders = await Order.find();
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to fetch orders'
        });
    };
};

// GET ORDER BY ID  
export const getOrderById = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            res.status(404).json({
                message: 'Order not found'
            });
            return;
        }
        res.json(order);
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to fetch order'
        });
    };
};