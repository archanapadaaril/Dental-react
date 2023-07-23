import './nav.css';
import {Link} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Navbar(){
   
   
    
    return(

      <nav className='navbar  sticky-top navbar-expand-lg  navbar-light '>
        <img style={{width:"60px",height:"60px"}} src='data:image/jpeg;base64,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' alt='img'/>
      <h3>DENTAL</h3>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div  class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
         <li  className='Nav-item'>
          <Link to="/" style={{color:"black",textDecoration:"none"}}>Home</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="About" style={{color:"black",textDecoration:"none"}}>About</Link>
         </li >
         <li  className='Nav-item'>
          <Link to="Service" style={{color:"black",textDecoration:"none"}}>Service</Link>
         </li >
         <li  className='Nav-item'>
          <Link to="Login" style={{color:"black",textDecoration:"none"}}>Login</Link>
         </li>
         <li  className='Nav-item'>
          <Link to="Register" style={{color:"black",textDecoration:"none"}}>Register</Link>
         </li>
    </ul>
  </div>
  
  </nav>

    );
}
export default Navbar;