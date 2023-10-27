import React from 'react';

import './Gallery.css';
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Gallery = () => (
  <div className="app__gallery flex__center " id="gallery">
  <div className="app__wrapper_info">
    <SubHeading title="Insatgram"/>
    <h1 className="app__header-h1 headtext__cormorant">Photo Gallery</h1>
    <p className="p__opensans" style={{margin:'2rem 0', color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
    <button type="button" className="custom__button">View More</button>
  </div>
  <div className="img ">
  <div className="app__wrapper_img">
    <img src={images.gallery04} alt="welcome" />
  </div>
  <div className="app__wrapper_img">
    <img src={images.gallery02} alt="welcome" />
  </div>
  <div className="app__wrapper_img">
    <img src={images.gallery03} alt="welcome" />
  </div>
  <div className="app__wrapper_img">
    <img src={images.gallery01} alt="welcome" />
  </div>
  </div>
  
</div>
);

export default Gallery;
