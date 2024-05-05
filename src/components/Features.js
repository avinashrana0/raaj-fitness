import React, {useRef,useEffect} from "react";
import { gsap} from "gsap";
import './Features.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default  function Features ()  {

let text=useRef(null);

useEffect(() => {

   gsap.to(text, {
      delay:0.4,
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []);


    return (
      <div className="feautures">
        <div className="feautures--container features-background" >
        <div className="heading" ref={el=> {text=el}} >
          <h2 >Features</h2>
          <h1>What we Offer</h1>
          <div className="features--services">
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Group Fitness Classes</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Personal Training</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Complete Equipment</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Changing room available</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Cardio Exercises</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Open all 6 Weekdays</p>
          </div>
          </div>
        
          <div className="image" >
             <img className="features--image" src="https://images.jdmagicbox.com/comp/mandi/r8/9999p1905.1905.171230114907.l3r8/catalogue/raaj-fitness-center-gym-sarkaghat-mandi-gyms-y86jn08ri0.jpg" alt="gym"/>
          </div>
        </div>
      </div>
    )};
