import React from "react";
import './Register.css';

function Register(){
    return(
        <div className="regi">
          <div className="col-lg-12 col-md-6 col-sm-3">
             <div style={{display:"flex"}}> 
        <img style={{width:"500px",marginLeft:"10px"}} src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"/>

            
          <div className="card">  
            <div className="container-reg">
                <form className="form3">
                <h4 style={{marginLeft:"90px",marginTop:"20px"}}>Register Here..!</h4>
                <div className="form-group2">
                  <input type="email" className="form-control1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User name"/>
                 </div>
                <div className="form-group2">
                  <input type="email" className="form-control1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                 </div>
                 <div className="form-group2">
                 <input type="password" className="form-control1" id="exampleInputPassword1" placeholder="Password"/>
             </div>

             <button style={{marginTop:"30px",marginLeft:"50px",width:"130px"}} type="submit" className="btn btn-primary">Register</button>
           </form>
                <p style={{textAlign:"justify",marginLeft:"90px",marginTop:"20px"}}>Already have an account?<a href="/"> Login</a></p>
               
                
            </div>
            
        </div>
        </div>
        </div>

        </div>
    )
}

export default Register;