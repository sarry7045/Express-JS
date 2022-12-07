import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  join: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
