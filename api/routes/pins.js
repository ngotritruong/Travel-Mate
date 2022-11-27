import express from "express";
import Pin from "../models/Pin.js"
const router = express.Router();

router.post("/", async (req, res) => {
    const newPin = new Pin(req.body);
    try {
      const savedPin = await newPin.save();
      res.status(200).json(savedPin);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get all pins
  router.get("/", async (req, res) => {
    try {
      const pins = await Pin.find();
      res.status(200).json(pins);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.delete("/:id", async (req, res) => {
    try {
      await Pin.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } 
  
);
export default router;