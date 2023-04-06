import express from "express";
import { GetAllReserva } from "../controllers/reservation.js";

const router = express.Router();
router.get("/", GetAllReserva); 

export default router;