import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import flightDetails from "./routes/flightDetails.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectToDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1", flightDetails);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); // replace PORT with your environment variable name for port number.  // Use dotenv to load environment variables from a.env file.  // In this case, the.env file should contain PORT=5000.  // The server will start on port 5000.  // The express server will respond with "hello world" when accessed at the root URL (/)  // Replace "hello world" with your desired response.  // Replace "PORT" with your environment variable name for port number.  // Replace ".env" with the name of your.env file.  // Replace "5000" with your desired port number.  // Replace "/" with the desired route path.  // Replace "res.send" with the desired response method.  // Replace "hello world" with your desired response.  // Replace "PORT" with your environment
});
