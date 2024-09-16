import React from 'react';
import { IoMdPin, IoIosCall, IoMdMail,IoIosArrowForward } from "react-icons/io";
import {FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div >
        <div className="footer__content">
          <div>
            <h2 className="footer__head">Get in touch</h2>
              <ul>
                <li><IoMdPin className="loc__icon" /> <a href="#">123Street, New York, USA</a></li>
                <li><IoIosCall className="loc__icon"/> <a href="#">+01234567890</a></li>
                <li><IoMdMail className="loc__icon"/> <a href="#">info@example.com</a></li>
              </ul>

              <div className="icon__list">
                  <span className="icons"><FaTwitter /></span>
                  <span className="icons"><FaFacebookF /></span>
                  <span className="icons"><FaLinkedinIn /></span>
                  <span className="icons"><FaInstagram /></span>
              </div>
          </div>
          <div>
            <h2 className="footer__head">quick links</h2>
            <ul>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Home</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">About Us</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Our Features</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Classes</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Cantact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="footer__head">popular links</h2>
            <ul>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Home</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">About Us</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Our Features</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Classes</a></li>
                <li><IoIosArrowForward className="loc__icon"/><a href="#">Cantact Us</a></li>
            </ul>
          </div>

          <div className="open__hours">
            <h2 className="footer__head">opening hours</h2>
            <h4>monday-friday</h4>
            <p>8:00 am- 8:00 pm</p>
            <h4>saturday-sunday</h4>
            <p>2:00 pm- 8:00 pm</p>
          </div>
        </div>
        <hr></hr>
        <p className="capyrights">&copy; <b>Your Site Name.</b> All Rights Reserved.</p>
        {/* <hr></hr> */}
      </div>
     
    </div>
  )
}
export default Footer;