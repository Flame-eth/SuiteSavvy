import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  // Check if user already exists
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(400).json({
      error: "Username already exists",
    });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  try {
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    // Check if user exists
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError("User not found", 404));
    }

    // Check if password is correct
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return next(createError("Wrong password or username!", 400));

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "5d" }
    );

    const { password, isAdmin, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...others }, isAdmin });
  } catch (err) {
    next(err);
  }
};
