import express from "express";
import FlightDetailModel from "../models/flightModel.js";
const router = express.Router();

router.get("/flights", async (req, res) => {
  try {
    const flights = await FlightDetailModel.find();
    res.status(200).json({ flights });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get by id
// router.get("/flights/:flight_id", async (req, res) => {
//   const flightId = req.params.flight_id;
//   try {
//     const flight = await FlightDetailModel.findOne({ flight_id: flightId });
//     if (!flight) {
//       return res.status(404).send({ message: "flight not found" });
//     }
//     res.json({ flight });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

export default router;
