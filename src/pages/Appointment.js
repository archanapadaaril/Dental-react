import React from "react";
import './appointment.css'

function Appointment(){
    return (
        <div className="div1">
            <h4>Book An Appointment</h4>
            <div style={{display:"flex"}}>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-smiling-confident-standing-with-arms-crossed-white-wall_141793-47701.jpg?w=740&t=st=1687935576~exp=1687936176~hmac=018027fc9e19432ada3263e2263da0bf2719cb9e98e72c7fc494f4488f0fb2b7"/>
                <div className="container">
                    <h5>
                    Dr. Maria Zavatova
                    </h5>
                    <p style={{textAlign:"justify"}}>General and Implant Dentist, Cosmetic and Sedation Dentist</p>
                    <button className="b1">Book Appointment</button>
                </div>

            </div>
            <div className="card">
                <img src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
                <div className="container">
                    <h5>
                    Dr. David Fisher
                    </h5>
                    <p style={{textAlign:"justify"}}>Ortho specialist,General and Implant Dentist</p>
                    <button>Book Appointment</button>
                </div>
           </div>
           <div className="card">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
                <div className="container">
                    <h5>
                    Dr.Joseph James 
                    </h5>
                    <p style={{textAlign:"justify"}}>Ortho specialist,General and Implant Dentist</p>
                    <button>Book Appointment</button>
                </div>
           </div>
           {/*  */}
           
            </div>
       
            <div style={{display:"flex"}}>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1687935396~exp=1687935996~hmac=bc664f15f9dead6e00e39414cc4381e88f14e9910093b08f263b8fd7e6da7d85"/>
                <div className="container">
                    <h5>
                    Dr Dijo Davis
                    </h5>
                    <p style={{textAlign:"justify"}}>General and Implant Dentist, Cosmetic and Sedation Dentist</p>
                    <button>Book Appointment</button>
                </div>

            </div>
            <div className="card">
                <img src="https://img.freepik.com/free-photo/portrait-doctor_144627-39381.jpg?size=626&ext=jpg&ga=GA1.1.165515460.1687678844&semt=ais"/>
                <div className="container">
                    <h5>
                    Dr. Susan Kimmel
                    </h5>
                    <p style={{textAlign:"justify"}}>Ortho specialist,General and Implant Dentist</p>
                    <button>Book Appointment</button>
                </div>
           </div>
           <div className="card">
                <img src="https://img.freepik.com/free-photo/female-doctor-lab-coat-white-isolated-confident-smile_343596-6556.jpg?size=626&ext=jpg&ga=GA1.2.165515460.1687678844&semt=ais"/>
                <div className="container">
                    <h5>
                    Dr. Maria Wang
                    </h5>
                    <p style={{textAlign:"justify"}}>Ortho specialist,General and Implant Dentist</p>
                    <button>Book Appointment</button>
                </div>
           </div>
           </div>
           {/*  */}
           
        </div>
    )
}
export default Appointment