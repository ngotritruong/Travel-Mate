import { Booking } from "../lib/booking.js";
import { getAllreservation } from "../lib/getAllreservation.js";

export const Resevation = async (req, res) => {
    try {
      await Booking(req.body)
      res.status(200).json({message: "Dath phong thanh cong"});
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const GetAllReserva = async (req, res) => {
    try {
        res.json(await getAllreservation());
    } catch (err) {
      res.status(500).json(err);
    }
  };