import React from "react";
import { useNavigate } from "react-router-dom";
function Appointment(){
  const navigate=useNavigate();

  const appoinment=()=>{
    navigate("/Booking")
  }

    return(
      <div >
      <h2>Our Services</h2>
     <div className="card-group" >
      
<div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px",height:"300px"}}>
<img className="card-img-top" style={{height:"300px"}} src="https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-smiling-confident-standing-with-arms-crossed-white-wall_141793-47701.jpg?w=740&t=st=1687935576~exp=1687936176~hmac=018027fc9e19432ada3263e2263da0bf2719cb9e98e72c7fc494f4488f0fb2b7"/>
<div className="card-body">
<h5 className="card-title">Dr. Maria Zavatova</h5>
<p className="card-text">Genaral & Implant Specialist</p>
<button onClick={appoinment} type="button" style={{width:"200px",color:"black",marginTop:"10px"}}className="btn btn-primary">Make an appointment</button>
</div>
</div>
<div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
<img className="card-img-top" style={{height:"300px"}} src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"  alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Dr. David Fisher</h5>
<p className="card-text">
Ortho specialist,General and implant Dentist</p>
<button type="button" onClick={appoinment} style={{width:"200px",color:"black",marginTop:"10px"}}className="btn btn-primary">Make an appointment</button>
</div>
</div>
<div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
<img className="card-img-top" style={{height:"300px"}} src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Dr. Joseph James</h5>
<p className="card-text">ortho specialist,General and implant Dentist</p>
<button type="button" onClick={appoinment} style={{width:"200px",color:"black",marginTop:"10px"}}className="btn btn-primary">Make an appointment</button>
</div>
</div>
</div>
{/*second row  */}
<div className="card-group"  >
<div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
<img className="card-img-top" style={{height:"300px"}} src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1687935396~exp=1687935996~hmac=bc664f15f9dead6e00e39414cc4381e88f14e9910093b08f263b8fd7e6da7d85"alt="Card image cap"/>
<div classame="card-body">
<h5 className="card-title">Dr. Dijo Davis</h5>
<p className="card-text">Cosmetic Dentist & General dentist</p>
<button type="button" onClick={appoinment} style={{width:"200px",color:"black",marginTop:"10px"}}className="btn btn-primary">Make an appointment</button>
</div>
</div>
<div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
<img className="card-img-top" style={{height:"300px"}}src="https://img.freepik.com/free-photo/female-doctor-lab-coat-white-isolated-confident-smile_343596-6556.jpg?size=626&ext=jpg&ga=GA1.2.165515460.1687678844&semt=ais" alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Dr. Maria Wang</h5>
<p className="card-text">General Dentist</p>
<button type="button" onClick={appoinment} style={{width:"200px",color:"black",marginTop:"10px"}}className="btn btn-primary">Make an appointment</button>
</div>
</div>
<div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
<img className="card-img-top" style={{height:"300px"}} src="https://img.freepik.com/free-photo/portrait-doctor_144627-39381.jpg?size=626&ext=jpg&ga=GA1.1.165515460.1687678844&semt=ais" alt="Card image cap"/>
<div className="card-body">
<h5 className="card-title">Dr. Susan Kimel</h5>
<p className="card-text">Ortho specialist and Cosmetic Dentist</p>
<button type="button" onClick={appoinment} style={{width:"200px",color:"black",marginTop:"10px"}}className="btn btn-primary">Make an appointment</button>
</div>
</div>
</div>

 </div>
    )
}
export default Appointment;

