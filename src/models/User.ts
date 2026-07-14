import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  password: string;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: false
  },
  
  password : {
    type: String,
    required: false
  }
});

export default mongoose.model<IUser>('User', userSchema);