import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
  update_id: { type: Number, required: true },
  time: { type: Date, required: true },
  type: {
    type: String,
    enum: ["Gate Change", "Delay", "Cancellation"],
    required: true,
  },
  details: {
    from_gate: { type: String }, // For 'Gate Change'
    to_gate: { type: String }, // For 'Gate Change'
    delay_duration: { type: String }, // For 'Delay', duration in ISO 8601 duration format or a readable format
    new_departure_time: { type: Date }, // For 'Delay'
    reason: { type: String }, // For 'Cancellation'
  },
});

// Define the schema for flights
const flightDetailSchema = new mongoose.Schema({
  flight_id: { type: String, required: true, unique: true },
  airline: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  scheduled_departure: { type: Date, required: true },
  scheduled_arrival: { type: Date, required: true },
  status: {
    type: String,
    enum: ["On Time", "Delayed", "Cancelled"],
    required: true,
  },
  updates: [updateSchema], // Embedding the updateSchema
});

const FlightDetailModel = mongoose.model("flightdetails", flightDetailSchema);

export default FlightDetailModel;
