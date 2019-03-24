import mongoose from 'mongoose';

const { Schema } = mongoose;

// Create a user schema.

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const User = mongoose.model('user', UserSchema);

export default User;
