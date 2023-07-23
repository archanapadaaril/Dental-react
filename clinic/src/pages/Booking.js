import React, { useState } from "react";
import axios from "axios";
import "./Booking.css";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // const message = () => {
  //   alert("Thank you! Your Response is Saved!");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/contact", {
        name,
        email,
        text,
      });
      console.log(response.data);
     
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <div>
    

      {/* <form className="form-group" onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form__input"
            placeholder="Patient Name"
            required
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form__input"
            placeholder="email"
            required
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form__input"
            placeholder="Patient Description"
            required
          />
        </div>
        <div className="row" style={{ marginLeft: "30px" }}>
        </div>
      </form> */}
      <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Book Your Visit</h4>
                
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2 style={{marginTop:"10px"}}>Book Now</h2>
					</div>
					<div className="row">
						<form onSubmit={(e)=>handleSubmit(e)} control="" className="form-group">
							<div className="row">
              <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form__input"
            placeholder="Patient Name"
            required
          />

							</div>
                            <div className="row">
                            <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form__input"
            placeholder="email"
            required
          />
          </div>
                            
							<div className="row">
              <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form__input"
            placeholder="Patient Description"
            required
          />
							</div>
							<div className="row" style={{marginLeft:"30px"}}>
              <input type="submit"  value="Submit" className="btn" />
							</div>
						</form>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	

    </div>
  );
}

export default Booking;
