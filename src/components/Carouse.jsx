import React from 'react';
import {Carousel} from 'react-bootstrap';
import Img from '../global/img/carousel-1.jpg';
import Img1 from '../global/img/carousel-2.jpg';
import './Carouse.css';

const Carouse =()=> {
   
    return (
    <div className="carousel__div">
    <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img}
            alt="First slide"
          />
          <div className="gym__head">
            <div>
              <h5  className="gym" >Gym & Fitness Center</h5>
              <h1 className='biggest-heading'>Best Gym In Town</h1>
              <button className="button"> Join Us Now</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Second slide"
          />

          <div className="gym__head">
          <div>
              <h5 className="gym" >Gym & Fitness Center</h5>
              <h1>Best Gym In Town</h1>
              <button className="button"> Join Us Now</button>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
   </div>
    );
  }
  export default Carouse;
  