import React from "react";
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate=useNavigate();
    const discover=()=>{
        navigate('/Discover')
    }

    return(
        <div style={{height:"300px"}}>   
        <img  style={{width:"100%",height:"900px"}}src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80" alt="img"/>

            <div class="jumbotron text-center" style={{marginTop:"-800px"}} >
  <h1>Only One Kind Of Treatment<br></br>Your New Smile</h1>
  <p>"We Are Ready To Help & Take Care Of Your Dental Health...Our Clients Are Our Priority"</p>
  <button type="button" class="btn btn-primary" onClick={discover} style={{width:"200px",backgroundColor:"blue"}}>Discover More</button>


</div>
  

           
        </div>
        
    )
}
export default Home;