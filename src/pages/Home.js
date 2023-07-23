import React from "react";
import './home.css'
import 'bootstrap/dist/css/bootstrap.css';


function Home(){
    return(
        <div className="col-lg-12 col-md-6 col-sm-3">
         <div className="two"> 
            <img  style={{width:"100%",height:"900px"}}src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"/>
            <div className="head">
            <h4 style={{marginTop:"-800px"}} className="th">Only One Kind Of Treatment</h4>
            <h2 style={{marginLeft:"40px"}}>YOUR NEW SMILE</h2>
            {/* <p>"We Are Ready To Help & Take Care Of Your Dental Health...Our Clients Are Our Priority, We Offer Quality Dental Services With A Team Of Specialists...Our goal is to provide you with personal and advanced dental services</p> */}

            <button type="button" class="btn btn-primary">DISCOVER MORE</button> 
            </div>
            <div className="card1">

            </div>
            </div>
            
        </div> 

    )
}
export default Home;