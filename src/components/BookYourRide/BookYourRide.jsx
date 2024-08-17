import React, { useState } from 'react';
import './BookYourRide.css'; // Import CSS file for styling

const BookYourRide = () => {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [cabType, setCabType] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [driverAge, setDriverAge] = useState('');
  const [cabModel, setCabModel] = useState('');

  return (
    <div className="book-your-ride">
      <h2>Book Your Ride</h2>
      <div className="input-field">
        <label htmlFor="pick-up-location">Pick Up Location</label>
        <input type="text" id="pick-up-location" value={pickUpLocation} onChange={(e) => setPickUpLocation(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="drop-off-location">Drop Off Location</label>
        <input type="text" id="drop-off-location" value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="passengers">Passengers</label>
        <input type="number" id="passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="cab-type">Cab Type</label>
        <select id="cab-type" value={cabType} onChange={(e) => setCabType(e.target.value)}>
          {/* Add options for cab types */}
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="pick-up-date">Pick Up Date</label>
        <input type="date" id="pick-up-date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="pick-up-time">Pick Up Time</label>
        <input type="time" id="pick-up-time" value={pickUpTime} onChange={(e) => setPickUpTime(e.target.value)} />
      </div>
      <div className="input-field">
        <label htmlFor="driver-age">Driver Age</label>
        <select id="driver-age" value={driverAge} onChange={(e) => setDriverAge(e.target.value)}>
          {/* Add options for driver ages */}
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="cab-model">Cab Model</label>
        <select id="cab-model" value={cabModel} onChange={(e) => setCabModel(e.target.value)}>
          {/* Add options for cab models */}
        </select>
      </div>
      <button className="book-button">BOOK TAXI →</button>
    </div>
  );
};

export default BookYourRide;