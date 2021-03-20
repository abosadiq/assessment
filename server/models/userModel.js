import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  image: {
    type: String,
  },
});
export const User = mongoose.model("User", userSchema);
