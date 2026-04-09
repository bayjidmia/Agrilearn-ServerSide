// controllers/auth.controller.js

import e from "express";
import userModel from "../models/user.model.js";

export const saveuser = async (req, res, next) => {
  try {
    // 🔥 verify Firebase token

    const { email, name, role } = req.body;

    let user = await userModel.findOne({ email });

    if (!user) {
      user = await userModel.create({
        email,
        name,
        role,
      });
    }

    res.json({
      success: true,
      message: "User authenticated",
      user,
    });
  } catch (err) {
    next(err);
  }
};
