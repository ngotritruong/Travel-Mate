import express from "express";
import { GetRooms } from "../controllers/rooms.js";

const router = express.Router();
router.get("/", GetRooms); 

export default router;