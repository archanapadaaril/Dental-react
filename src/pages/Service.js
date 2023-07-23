import React from "react";
import './service.css'

function Service(){
    return(
        <div  className="col-lg-12 col-md-6 col-sm-3" style={{height:"180px"}}>
            <h2>OUR SERVICES</h2>
            <div style={{height:"200px",width:"200px"}}>
                <img className="image" src="cc" alt="img"></img>
                <h3 className="hea">General Dentistry</h3>
                <p className="p2">We provide the full range of dental <br></br>treatments, from a simple scale.</p>
            </div>
            <div>
                <img className="img1" src="https://cdn-5ecc40d4c1ac18016c0585b8.closte.com/wp-content/uploads/2018/12/cosmetic-dentistry-in-Murfreesboro.jpg" alt="img"/>
                <h3 className="hea2">Cosmetic Dentistry</h3>
                <p className="p3">A great smile is a huge asset in <br></br>our social and professional lives.</p>
            </div>
            <div className="div3">
                <img className="img2" src="https://demo.curlythemes.com/dentist-wp/wp-content/uploads/sites/22/2017/09/AdobeStock_131000409-768x512.jpg"/>
                <h3 className="hea3">Dental Implant</h3>
                <p className="p4">The aim of orthodontic treatment is  <br></br>to reposition the teeth.</p>
            </div>
            <div>
                <img className="img3" src="https://demo.curlythemes.com/dentist-wp/wp-content/uploads/sites/22/2017/09/AdobeStock_71916418-768x512.jpg"/>
                <h3 className="hea4">Orthodontics</h3>
                <p className="p5">The aim of orthodontic treatment is to reposition <br></br>the teeth.</p>
            </div>
            <div>
                <img className="img4" src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_56198956.jpg"/>
                <h3 className="hea5">Whitening</h3>
                <p className="p6">Tooth whitening can be a very effective way of <br></br>lightening the natural colour of your teeth.</p>
            </div>
            <div>
                <img className="img5" src="https://demo.curlythemes.com/dentist-wp/wp-content/uploads/sites/22/2017/09/AdobeStock_110982357-768x512.jpg"/>
                <h3 className="hea6">Caries</h3>
                <p className="p7">Damaged areas in the hard surface of your teeth <br></br>that develop into tiny openings or holes.</p>
            </div>

        </div>
    )
}
export default Service;
