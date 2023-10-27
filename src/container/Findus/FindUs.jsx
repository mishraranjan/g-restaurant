import React from 'react'
import { images } from "../../constants";
import "../Header/Header.css";
import { SubHeading } from "../../components";
const FindUs = () => (
  <div className="app__header app__wrapper section__padding app__bg"  style={{paddingBottom:'0'}}id="contact">
  <div className="app__wrapper_info">
    <SubHeading title="Contact"/>
    <h1 className="app__header-h1 headtext__cormorant">Find Us</h1>
    <p className="p__opensans" style={{margin:'2rem 0', color:'gray'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
    <p className='headtext__cormorant' style={{fontSize:'23px', fontWeight:'700'}}>Opening Hours</p>
    <p className="p__opensans" style={{margin:'0'}}>Mon - Fri: 10:00 am - 02:00 am</p>
    <p className="p__opensans" style={{margin:'1rem 0'}}>Sat - Sun: 10:00 am - 03:00 am</p>
    <button type="button" className="custom__button">Visit Us</button>
  </div>
  <div className="app__wrapper_img">
    <img src={images.findus} alt="welcome" />
  </div>
</div>
);

export default FindUs

