import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const url='http://training.ateesdemo.com/user-login';
    const[data,setData]=useState({
        email:"",
        password:""
        
    });
    const handle=(e)=>{
        const newData={...data};
        newData[e.target.id]=e.target.value;
        setData(newData);
    };
    
    const handleSubmit=(e)=>{
        console.log(JSON.stringify(data))
        e.preventDefault();
        if ( !data.email || !data.password) {
            alert("Please fill in all the fields.");
           
            return;
        }
        navigate("/Appointment")
        var form=new FormData();
        form.append('email',data.email);
        form.append('password',data.password);
        

        axios
        .post(url,form,{
            headers:{"Content-Type":"multipart/form-data"},
        })
        .then((response)=>{
            console.log(response.data);
            setData({...data,id:e.target.value})
        });
    };
    
    return(
      <div>
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
            <div className="col-md-4 text-center company__info">
                <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                <h4 className="company_title">Explore our Dental World.. login please</h4>
                
            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                <div className="container-fluid">
                    <div className="row">
                        <h2 style={{marginTop:"10px"}}>Login..!</h2>
                    </div>
                    <div className="row">
                        <form control="" className="form-group" onSubmit={(e,id)=>handleSubmit(e,id)}>
                        <div className="row">
                                <input onChange={(e,email)=>handle(e,email)} type="text" name="email" id="email" value={data.email} className="form__input" placeholder="your email"/>
                            </div>
                            
                            <div className="row">
                                <input onChange={(e,password)=>handle(e,password)} type="password" name="password" id="password" value={data.password} className="form__input" placeholder="your enter password"/>
                            </div>
                            <div class="row">
                                <input type="checkbox" name="remember_me" id="remember_me" className=""/>
                                <label for="remember_me">Remember Me!</label>
                            </div>
                            <div className="row" style={{marginLeft:"30px"}}>
                                <input type="submit" onSubmit={(handleSubmit)} value="Submit" class="btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <p>Don't have an account? <a href="#">Rgesister Here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    
    
        
    )
}
export default Login;

