import React from "react";

function Service(){
    return(
        <div >
            <h2>Our Services</h2>
           <div className="card-group" >
            
  <div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
    <img className="card-img-top" style={{height:"300px"}} src="https://cdn-5ecc40d4c1ac18016c0585b8.closte.com/wp-content/uploads/2018/12/cosmetic-dentistry-in-Murfreesboro.jpg"  alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">General dentistry</h5>
      <p className="card-text">We provide full of General dentsistry in a simple scale...</p>
      <p className="card-text"><small className="text-muted">more</small></p>
    </div>
  </div>
  <div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
    <img className="card-img-top" style={{height:"300px"}} src="https://demo.curlythemes.com/dentist-wp/wp-content/uploads/sites/22/2017/09/AdobeStock_131000409-768x512.jpg"  alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Dental Implant</h5>
      <p className="card-text">We have experienced Doctors for Dental Implant....</p>
      <p className="card-text"><small className="text-muted">more</small></p>
    </div>
  </div>
  <div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
    <img className="card-img-top" style={{height:"300px"}} src="https://demo.curlythemes.com/dentist-wp/wp-content/uploads/sites/22/2017/09/AdobeStock_71916418-768x512.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Orthodontics</h5>
      <p className="card-text">The aim of orthodontic treatment is to reposition the teeth</p>
    </div>
  </div>
</div>
{/*second row  */}
<div className="card-group" style={{marginTop:"50px"}} >
  <div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
    <img className="card-img-top" style={{height:"300px"}} src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_56198956.jpg"alt="Card image cap"/>
    <div classame="card-body">
      <h5 className="card-title">Whitening</h5>
      <p className="card-text">Tooth whitening can be a very effective way of
lightening the natural colour of your teeth</p>
    </div>
  </div>
  <div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
    <img className="card-img-top" style={{height:"300px"}}src="https://demo.curlythemes.com/dentist-wp/wp-content/uploads/sites/22/2017/09/AdobeStock_110982357-768x512.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Caries</h5>
      <p className="card-text">Damaged areas in the hard surface of your teeth..
that develop into tiny openings or holes</p>
    </div>
  </div>
  <div className="card" style={{marginLeft:"20px",marginTop:"20px",borderRadius:"8px"}}>
    <img className="card-img-top" style={{height:"300px"}} src="https://www.bruneldentalpractice.co.uk/wp-content/uploads/2018/07/tissue-graft.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Cosmetic Dentistry</h5>
      <p className="card-text">Damaged areas in the hard surface of your teeth
that develop into tiny openings or holes</p>
    </div>
  </div>
</div>

        </div>
    )
}
export default Service;