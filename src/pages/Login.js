import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css'
function Login(){
    return(
      <div>
        <main className="row justify-content-center align-items-center bg-light fill-vertical py-5">
	<div className="col-12 col-md-4 col-lg-3">
		<form action="">
			<div className="card shadow-sm mb-5">
				<div className="card-header border-0 bg-white">
					<h1 className="h4 mb-0">
						Login
					</h1>
				</div>
				<div className="card-body pb-2">
					<div className="form-group">
						<label for="email-address-field">
							E-mailadres
						</label>
						<input type="email" class="form-control" id="email-address-field"/>
						<div className="form-text"></div>
					</div>
					<div className="form-group">
						<div className="d-flex justify-content-between align-item-center">
							<label for="password-field" className="flex-fill">
								<span>Wachtwoord</span>
							</label>
							<a href="/forgot"><small>Vergeten?</small></a>
						</div>
						<input type="password" className="form-control" id="password-field"/>
						<div class="form-text"></div>
					</div>
				</div>
				<div className="card-footer border-0 bg-white pt-0">
					<button className="btn btn-primary btn-block" type="submit">
						Login
					</button>
				</div>
			</div>
		</form>
	</div>
</main>
                
        </div>
    )
}
export default Login;