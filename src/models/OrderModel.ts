import mongoose from "mongoose";

export interface IOrder extends mongoose.Document {
  user: string;
  product: string;
  quantity: number;
}

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IOrder>("Order", orderSchema);
