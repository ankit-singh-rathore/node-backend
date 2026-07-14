import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db';
import { logger } from './middlewares/logger';
import { validateUser, validateOrder, validateLogin } from './middlewares/validateData';
import morgan from 'Morgan';

import userRoute from './routes/userRoute';
import ordersRoute from './routes/orderRoute';
import authRoute from './routes/authRoute';

dotenv.config();

const app = express();
app.use(morgan('combined'));

app.use(express.json());
app.use(logger);

connectDB();

app.use('/users', validateUser, userRoute);
app.use('/orders', validateOrder, ordersRoute);
app.use('/auth', validateLogin, authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});