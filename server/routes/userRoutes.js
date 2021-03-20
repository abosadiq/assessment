import express from "express";
import { User } from "../models/userModel.js";
const router = express.Router();

//  get all users
router.get("/user", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

// post a user
router.post("/user", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    image: req.body.image,
  });
  await newUser.save();
  res.send(newUser);
});

// delete a user
router.delete("/user/:id", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

// update a user
router.patch("/user/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (req.body.name) {
      user.name = req.body.name;
    }
    if (req.body.mobile) {
      user.mobile = req.body.mobile;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

export default router;
