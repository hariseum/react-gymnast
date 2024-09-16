import React, { useState } from 'react'
import "./Content.css";
import "../global/lib/flaticon/font/flaticon.css";
import './ContentAkash.css';
import Timetable from './Timetable';
import aboutImage from '../global/img/about.jpg';
import feature1 from "../global/img/feature-1.jpg";
import feature4 from "../global/img/feature-4.jpg";
import blog1 from "../global/img/blog-1.jpg";
import blog2 from "../global/img/blog-2.jpg";

const Content = () => {
  const tableData =[
    {time:'6:00am-8:00am', m: {e:"Cardio", t:"John Deo"},tu: {e:"", t:""},w: {e:"Crossfit", t:"Adam Philips"},th:{e:"", t:""} ,f:{e:"Power Lifting", t:"James Alien"} ,sa: {e:"", t:""},su: {e:"Cardio", t:"John Deo"}},
    {time: '10:00am-12:00am', m: {e:"", t:""},tu: {e:"Power Lifting", t:"James Alien"},w: {e:"", t:""},th: {e:"Cardio", t:"John Deo"},f: {e:"", t:""},sa: {e:"Crossfit", t:"Adam Philips"}, su:{e:"", t:""}},
    {time: '5:00pm-7:00pm', m:{e:"Crossfit", t:"Adam Philips"}, tu:{e:"", t:""}, w:{e:"Power Lifting", t:"James Alien"},th:{e:"", t:""} , f:{e:"Cardio", t:"John Deo"},sa: {e:"", t:""}, su:{e:"Crossfit", t:"Adam Philips"}},
    {time: '7:00pm-9:00pm', m: {e:"", t:""}, tu:{e:"Cardio", t:"John Deo"},w:{e:"", t:""},th: {e:"Crossfit", t:"Adam Philips"},f:{e:"", t:""} ,sa: {e:"Power Lifting", t:"James Alien"},su:{e:"", t:""}},
  ];

  const [tableCompo, settableCompo] = useState(<Timetable tableData={tableData} />);
  const [bmiValue, setbmiValue] = useState();

  const handleRoutine1 =()=>{
    return settableCompo(<Timetable tableData={tableData} />);
  }
  const handleRoutine2 =()=>{
    return settableCompo("");
  }
  const handleRoutine3 =()=>{
    return settableCompo("");
  }
  const handleRoutine4 =()=>{
    return settableCompo("");
  }

  //formula for bmi calculation
  function bmiCalculator(weight, height){
    const result = (weight/(height*height))*10000;
    return Math.round(result * 10)/10;
  }

  //bmi submit function
  function handleSubmit(event){
    event.preventDefault();

    const weight = event.target.elements.weight.value;
    const height = event.target.elements.height.value;
    // const age = event.target.elements.age.value;
    // const gender = event.target.elements.gender.value;

    if(weight && height){
      setbmiValue('Your BMI is: ' + bmiCalculator(weight, height));
    }else{
      setbmiValue("Enter Numbers Only!")
    }
  };

  function handleSubscribe(e){
      e.preventDefault();
  };
  return (
    <div className="content-wrapper">
      {/* about wrapper starts */}
        <div className="about-wrapper">
          <div className="rowH about-row">
            <div className="colH alignment-img">
              <img
                className="about-img"
                src={aboutImage}
                alt="about"
              ></img>
            </div>
            <div className="colH alignment-div">
              <h2 className="headings">10 Years Experience</h2>
              <p className="matter">
                Gymnast has been an iconic landmark in the history of physique sports.
                Over the past sixteen years, the patronage of Gymnast has included stalwarts from all disciplines.
              </p>
              <div className="rowH more-info">
                <div className="colHsm">
                  <i className="flaticon-barbell displayH"></i>
                  <h4 className="sm-heading">Certified GYM Center</h4>
                  <p className="matter">
                    Worldclass level gym center certified under NAFC
                  </p>
                </div>
                <div className="colHsm">
                  <i className="flaticon-medal displayH"></i>
                  <h4 className="sm-heading">Award Winning</h4>
                  <p className="matter">
                    Won awards in multiple categories at Fit&#38;Well Awards
                  </p>
                </div>
              </div>
              <button href="" className="btnH button-edit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      {/* about wrapper ends */}

      {/* service wrapper starts */}
        <div className="service-wrapper">
          <div className="rowH about-row">
            <div className="colH4">
              <div className="smHcard smHcard-1">
                <i className="flaticon-training"></i>
                <div className="smHcard-content">
                  <h2>Progression</h2>
                  <p className="matter">Monitor and track your progress under the guidance of industry's most experienced professionals</p>
                </div>
              </div>
            </div>
            <div className="colH4">
              <div className="smHcard smHcard-2">
                <i className="flaticon-weightlifting"></i>
                <div className="smHcard-content">
                  <h2>Workout</h2>
                  <p className="matter">Get your free workout plan tailored just for your body type and routine by our certified trainers</p>
                </div>
              </div>
            </div>
            <div className="colH4">
              <div className="smHcard smHcard-3">
                <i className="flaticon-treadmill"></i>
                <div className="smHcard-content">
                  <h2>Nutrition</h2>
                  <p className="matter">Our Nutrition Experts prepare your nutrition plan for gain/cut according to your body type</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* service wrapper ends */}

      {/* benifit wrapper starts */}
        <div className="benifit-wrapper">
          <div className="benifit-headings">
            <h4 className="benifit-pre-heading">Why Choose Us?</h4>
            <h4 className="headings headings-benifit">Benifits of Joining Our GYM</h4>
          </div>
          <div className="rowH about-row-benifit">
            <div className="colHmd6">
              <div className="rowH flexHcolumn">
                <div className="colHsm5">
                  <img className="benifit-img" src={feature1} alt="Image" />
                  <i className="flaticon-muscular-bodybuilder-with-clock benifit-icon"></i>
                </div>
                <div className="colHsm7">
                  <h4 className="sm-heading">Videos Instruction</h4>
                  <p className="matter-benifit">Choose the muscle group you want to target, use the sort and filter options to find the best exercises for the equipment you have, your training experience, and goals.</p>
                </div>
              </div>
            </div>
            <div className="colHmd6">
              <div className="rowH flexHcolumn">
                <div className="colHsm5">
                  <img className="benifit-img" src={feature4} alt="Image" />
                  <i className="flaticon-support benifit-icon"></i>
                </div>
                <div className="colHsm7">
                  <h4 className="sm-heading">Community Support</h4>
                  <p className="matter-benifit">Community support can help motivate individuals to adhere to regular fitness and exercise programs. Our experts are available 24x7 to guide members in their queries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* benifit wrapper ends */}

      {/* Akash contents starts */}
        <div className="content">
          <div className="subscribe container-fluid">
            <h1 className='headings headings-benifit pt-5'>Subscribe Our Newsletter</h1>
            <p className='matter-benifit text-center pb-4'>Subscribe and get Our latest article in your inbox</p>
            <form>
              <input type="email" placeholder="Your Email" required/>
              <button onClick={()=>handleSubscribe}>Subscribe</button>
            </form>
          </div>
          <div className="timetable container matter-benifit text-center">
            <h6 className='benifit-pre-heading'>Class Timetable</h6>
            <h1 className="headings headings-benifit mt-0 mb-5">Working Hours and Class Time</h1>
            <div className="btn-group mb-3">
              <button type="button" className="btn btn-outline-danger border-0 rounded-0 mx-1 active px-4 py-2" onClick={handleRoutine1}>All Classes</button>
              <button type="button" className="btn btn-outline-danger border-0 rounded-0 mx-1 px-4 py-2" onClick={handleRoutine2}>Cardio</button>
              <button type="button" className="btn btn-outline-danger border-0 rounded-0 mx-1 px-4 py-2" onClick={handleRoutine3}>Crossfit</button>
              <button type="button" className="btn btn-outline-danger border-0 rounded-0 mx-1 px-4 py-2" onClick={handleRoutine4}>Powerlifting</button>
            </div>
            {tableCompo}
          </div>
          <div className="bmi row">
            <div className="bmichild1 col col-md-6 col-12 ">
                <h5 className='benifit-pre-heading'>Body Mass Index</h5>
                <h1 className='headings headings-benifit'>Whate is BMI?</h1>
                <p className='matter'>Vero elitr lorem magna justo magna justo at justo est ipsum
                  sed clita lorem dolor ipsum sed. Logrem sea lorem vero. Sanct
                  dolor clita clita rebum kasd magna erat diam
                </p>
            </div>
            <div className="bmichild2  col col-md-6 col-12">
                <h2>Calculate your BMI</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row mx-4 demo">
                    <div className="col"><input className="form-control mb-2 inputC" type="number" min="6" max="500" placeholder="Weight (KG)" name="weight" required/></div>
                    <div className="col"><input className="form-control mr-2 inputC" type="number" min="50" max="275" placeholder="Height (CM)" name="height" required/></div>
                    <div className="w-100"></div>
                    <div className="col"><input className="form-control mb-2 inputC" type="number" min="10" max="90" placeholder="Age" name="age" /></div>
                    <div className="col"><input className="form-control inputC" type="text" placeholder="Gender" name="gender" /></div>
                    <div className="w-100"></div>
                    <div className="col col-12"><button type="submit" className="btn btn-outline-secondary mb-5 inputC">Calculate Now</button></div>
                  </div>
                </form>
                <span className="text-danger mx-4">{bmiValue}</span>
            </div>
          </div>
        </div>
      {/* Akash contents ends */}

      {/* blog wrapper starts */}
        <div className="blog-wrapper">
          <div className="benifit-headings">
            <h4 className="benifit-pre-heading">Our Blog</h4>
            <h4 className="headings headings-benifit">Latest Article From Blog</h4>
          </div>
          <div className="rowH blog-row">
            <div className="colH blog-col-1">
              <img className="imgH blog-img" src={blog1} alt="Image" />
              <div className="blog-align">
                  <div className="blog-align blog-date">
                      <small>01</small>
                      <strong className="blog-month">Jan</strong>
                      <small>2045</small>
                  </div>
                  <div className="blog-pre-heading">
                      <h3 className="blog-sm-heading">Lorem ipsum dolor sit amet</h3>
                      <div className="blog-icons">
                          <small className="mute-text"><i className="fa fa-user"></i> Admin</small>
                          <small className="mute-text"><i className="fa fa-folder"></i> Web Design</small>
                          <small className="mute-text"><i className="fa fa-comments"></i> 15 Comments</small>
                      </div>
                  </div>
              </div>
              <p className="matter-benifit">Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
              <a className="btnH blog-button-edit" href="">Read More <i className="fa fa-angle-right"></i></a>
            </div>
            <div className="colH blog-col-2">
              <img className="imgH blog-img" src={blog2} alt="Image" />
              <div className="blog-align">
                  <div className="blog-align blog-date">
                      <small>01</small>
                      <strong className="blog-month">Jan</strong>
                      <small>2045</small>
                  </div>
                  <div className="blog-pre-heading">
                      <h3 className="blog-sm-heading">Lorem ipsum dolor sit amet</h3>
                      <div className="blog-icons">
                          <small className="mute-text"><i className="fa fa-user"></i> Admin</small>
                          <small className="mute-text"><i className="fa fa-folder"></i> Web Design</small>
                          <small className="mute-text"><i className="fa fa-comments"></i> 15 Comments</small>
                      </div>
                  </div>
              </div>
              <p className="matter-benifit">Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam</p>
              <a className="btnH blog-button-edit" href="">Read More <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      {/* blog wrapper ends */}
    </div>
  );
};
export default Content;
