import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import lostUserSchema from "../models/user.js";

export const signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  

  try {
    const existingUser = await lostUserSchema.findOne({ email });


    if (!existingUser)

      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    
      const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};

export const signup = async (req, res) => {

  const { email, password, confirmPassword, name } = req.body;

  try {
    const existingUser = await lostUserSchema.findOne({ email });
    if (existingUser)
    return res.status(400).json({ message: "User already exist." });
    
    if (password !== confirmPassword)
    return res.status(400).json({ message: "Passowrd not match" });
    
    
    const hashedPassword = await bcrypt.hash(password,12);


    const result = await lostUserSchema.create({
      email,
      password: hashedPassword,
      name: `${name}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test1", {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong." });
  }
};