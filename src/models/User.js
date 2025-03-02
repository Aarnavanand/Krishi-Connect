import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    lowercase: true
  },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['user', 'admin', 'farmer'], // Added 'farmer' as a valid role
    default: 'user' 
  },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;