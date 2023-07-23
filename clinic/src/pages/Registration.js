import React, { useState } from "react";
import './Registration.css';
import axios from 'axios'
import {useNavigate} from "react-router-dom";

function Register(){
	const navigate=useNavigate();
	const url = 'http://training.ateesdemo.com/user-registration';
	const[data,setData]=useState({
		name:"",
		email:"",
		password:"",
		phone:"",

	});

	const handle =(e) =>{
		const newData={...data};
		newData[e.target.id] =e.target.value;
		setData(newData);
	};

	const handleSubmit =(e) =>{
		console.log(JSON.stringify(data))
		e.preventDefault();
		if (!data.name || !data.email || !data.password || !data.phone) {
            alert("Please fill in all the fields.");
            return;
		}
		navigate('/Login');
		var form =new FormData();
		form.append('name',data.name);
		form.append('email',data.email);
		form.append('password',data.password);
		form.append('phone',data.phone);


		axios
		.post(url,form,{
			headers:{"Content-Type":"multipart/form-data"},

		})
		.then((response) => {
			console.log(response.data);
			setData({...data,id: e.target.value})
		});
	};




    return(
        <div>
            	<div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Welcome.....Please Register Here...!</h4>
                
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2 style={{marginTop:"10px"}}>Register..!</h2>
					</div>
					<div className="row">
						<form onSubmit={(e)=>handleSubmit(e)} control="" className="form-group">
							<div className="row">
								<input onChange={(e,name)=>handle(e,name)} type="text" name="name" id="name" value={data.name} className="form__input" placeholder="Your name"/>
							</div>
                            <div className="row">
								<input onChange={(e,email)=>handle(e,email)} type="text" name="email" id="email" value={data.email} className="form__input" placeholder="your email"/>
							</div>
							<div className="row">
								<input onChange={(e,password)=>handle(e,password)} type="password" name="password" id="password" value={data.password} className="form__input" placeholder="your enter password"/>
							</div>
							<div className="row">
								<input onChange={(e,phone)=>handle(e,phone)} type="phone" name="phone" id="phone" value={data.phone} className="form__input" placeholder="your phone number"/>
							</div>
							{/* <div className="row">
								<input onChange={(e,password)=>(e,password)} type="password" name="password" id="password" value={data.password} className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
								<input onChange={(e,phone)=>(e,phone)} type="number" name="phone" id="phone" value={data.password} className="form__input" placeholder="Phone no"/>
							</div> */}
							
							<div className="row" style={{marginLeft:"30px"}}>
								<input type="submit" onClick={handleSubmit} value="Submit" class="btn"/>
							</div>
						</form>
					</div>
					<div className="row">
						<p>Already have an account? <a href="#">Login Here</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	

        </div>
    )
}
export default Register;


