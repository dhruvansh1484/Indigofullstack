// // src/FlightSearch.js
// import React, { useState, useEffect } from "react";

// const FlightSearch = () => {
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     setError("");
//     fetch("http://localhost:7000/api/v1/flights")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch flights");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setFlights(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array ensures this runs only once on component mount

//   return (
//     <div>
//       <h1>All Flight Details</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//       {flights.length > 0 &&
//         flights.map((flight) => (
//           <div key={flight.flight_id}>
//             <h2>
//               {flight.airline} Flight {flight.flight_id}
//             </h2>
//             <p>
//               From: {flight.origin} To: {flight.destination}
//             </p>
//             <p>Status: {flight.status}</p>
//             <p>
//               Scheduled Departure:{" "}
//               {new Date(flight.scheduled_departure).toLocaleString()}
//             </p>
//             <p>
//               Scheduled Arrival:{" "}
//               {new Date(flight.scheduled_arrival).toLocaleString()}
//             </p>

//             <h3>Updates:</h3>
//             <ul>
//               {flight.updates.map((update) => (
//                 <li key={update.update_id}>
//                   <p>Type: {update.type}</p>
//                   <p>Time: {new Date(update.time).toLocaleString()}</p>
//                   {update.type === "Gate Change" && (
//                     <p>
//                       Gate changed from {update.details.from_gate} to{" "}
//                       {update.details.to_gate}
//                     </p>
//                   )}
//                   {update.type === "Delay" && (
//                     <p>
//                       Delay Duration: {update.details.delay_duration}, New
//                       Departure Time:{" "}
//                       {new Date(
//                         update.details.new_departure_time
//                       ).toLocaleString()}
//                     </p>
//                   )}
//                   {update.type === "Cancellation" && (
//                     <p>Reason: {update.details.reason}</p>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default FlightSearch;

import React, { useEffect, useState } from "react";
import Axios from "axios";

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [Details, setDetails] = useState(false);
  useEffect(() => {
    setDetails(true);
    const fetchFlights = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:7000/api/v1/flights"
        );
        console.log(response);
        setFlights(response.data.flights);
        console.log(flights);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFlights();
  }, []);

  // if (Details) return <p>Loading...</p>;
  return (
    <div>
      <h1>Flight List</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.flight_id}>
            <h2>
              {flight.airline} Flight {flight.flight_id}
            </h2>
            <p>
              From: {flight.origin} To: {flight.destination}
            </p>
            <p>Status: {flight.status}</p>
            <p>
              Scheduled Departure:{" "}
              {new Date(flight.scheduled_departure).toLocaleString()}
            </p>
            <p>
              Scheduled Arrival:{" "}
              {new Date(flight.scheduled_arrival).toLocaleString()}
            </p>
            <h3>Updates:</h3>
            <ul>
              {flight.updates.map((update) => (
                <li key={update.update_id}>
                  <p>Type: {update.type}</p>
                  <p>Time: {new Date(update.time).toLocaleString()}</p>
                  <p>Details:</p>
                  {update.type === "Gate Change" && (
                    <p>
                      Gate changed from {update.details.from_gate} to{" "}
                      {update.details.to_gate}
                    </p>
                  )}
                  {update.type === "Delay" && (
                    <>
                      <p>Delay Duration: {update.details.delay_duration}</p>
                      <p>
                        New Departure Time:{" "}
                        {new Date(
                          update.details.new_departure_time
                        ).toLocaleString()}
                      </p>
                    </>
                  )}
                  {update.type === "Cancellation" && (
                    <p>Reason: {update.details.reason}</p>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
