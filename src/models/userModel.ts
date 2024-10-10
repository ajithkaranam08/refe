// src/models/User.ts

import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the User model
export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string; // Consider hashing this before saving
  licenseType: 'batch' | 'non-batch'; // Type of license
  licenseNumber: string; // License number
  createdAt: Date;
  updatedAt: Date;
}

// Create the user schema
const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Ensure to hash passwords
    licenseType: { type: String, enum: ['batch', 'non-batch'], required: true },
    licenseNumber: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

// Export the model
const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;
