import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './booking.css';
import axios from "axios"; // Import axios

function Booking() {
  // State to manage the form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    doctor: 'Dr. Maria Zavatova', // Default value for the doctor select
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_API_URL' with the actual API endpoint URL for booking appointments
    const apiUrl = 'http://127.0.0.1:8000/booking';

    // Make an API request to submit the form data
    axios.post(apiUrl, formData)
      .then((response) => {
        console.log("Booking successful!", response.data);
        // Add any success handling code here
      })
      .catch((error) => {
        console.error("Error submitting booking:", error);
        // Add error handling code here
      });
  };

  return (
    <div className="col-lg-12 col-md-6 col-sm-3">
      <h3 style={{ marginTop: "20px" }}>A Warm Welcome and a Beautiful Smile</h3>
      <h3 style={{ marginRight: "40px" }}>Book Now...!</h3>
      <form className="form1" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Patient Name"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            id="examplephno"
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Patient Description"
          ></textarea>
        </div>
        <div className="form-group">
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="form-control"
          >
            <option>Dr. Maria Zavatova</option>
            <option>Dr. David Fisher</option>
            <option>Dr. Joseph James</option>
            <option>Dr. Dijo Davis</option>
            <option>Dr. Susan Kimmel</option>
            <option>Dr. Maria Wang</option>
          </select>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            style={{ width: "250px", marginTop: "20px" }}
          >
            Confirm Your Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
