import express from "express";
const router = express.Router();
import User from "../models/User.js";
import Admin from "../models/admin.js";
import bcrypt from "bcrypt";

//User
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("User not found!");
    
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong password or username!")
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Admin
router.post("/registerAd", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new Admin({
      nameAdmin: req.body.nameAdmin,
      email: req.body.email,
      password: hashedPass,
    });
    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/loginAd", async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    !admin && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, admin.password);
    !validated && res.status(400).json("Wrong credentials!")
    const { password, ...others } = admin._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
