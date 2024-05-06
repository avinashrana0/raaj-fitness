import React, {  useEffect , useRef} from 'react'
import {TweenMax, gsap} from "gsap";
import { Button } from '../components/Button';
import "./Trainers.css"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Trainer from '../assets/Trainer.jpg'
import Goal from '../assets/Goal.jpg'
import Gympan from '../assets/Gympan.jpg';

gsap.registerPlugin(ScrollTrigger);
export default function Trainers() {
  let cor=useRef(null);
useEffect(() => {

   gsap.to(cor, {
      delay:0.4,
      duration: 1,
      x: '0',
      y:"0",
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: cor,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []); 
   let corri=useRef(null);
   useEffect(() => {

   gsap.to(corri, {
      delay:0.4,
      duration: 1,
      x: '0',
      y:"0",
      opacity: 1,
      stagger:0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: corri,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []); 

  let newv=useRef([]);
useEffect(() => {

   TweenMax.to(newv.current, {
      delay:0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger:0.0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: ".why--container--wrapper",
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []); 


  return (
    <>
      <div className="faq--header"><h1>Trainers</h1></div>
        <div className="fet--contain">
          <div className='title'>
                <h2>Why Raj Fitness  Center Personal Training?</h2>
                <div className='underline'></div>
                <div className="">
                <p>Trainer will develop a personalized training program that fits your body, lifestyle and budget. They are certified experts in exercise physiology, anatomy, training program development, fitness assessments and applications. They excel at applying this knowledge to help you achieve your goal and go further in life.</p>
                </div>
            </div>
        </div>
        <div className="welcome">
          <img src={Trainer} alt="Raaj gym" ref={el=> {cor=el}}/>
          <div className="welcome--headline" ref={el=> {corri=el}}>
          <h3>Welcome to Personal Training by Raaj Fitness Center</h3>
          <p>Raaj thakur original from
            —mandi Himachal Pradesh, embarked on his journey on 13 April
            2010 when he in his
            District. initially the gym primarily focused On
            providing cardio and weight to
            its members.However as time passed, Raaj
            expanded his offerings to including fitness
            training and consultancy for aspiring youngsters
            and athletes.His ultimate objective was to assist
            them in building confidence , developing their
            muscles,and maintaining overall fitness and
            strength in addition to managing his gyms.</p>
           <p>Raj
              thakur has also assumed leadership role in the
              fitness industry.He currently serves as the
              President of the world fitness federation in
              district and holds the position on General
              Secretary in Himachal Pradesh representing his
              home state.those esteemed position are a
              testament to his unwavering commitment and
              noteworthy contributions
            </p>
           <p><strong><em>For best results, choose Personal Training Raaj Fitness Center.</em></strong></p>
        </div>
        </div>
        <div className="why">
          <h3>Why Personal Trainer</h3>
           <div className='underline'></div>
          <div className="why--container">
          <div className="why--container--wrapper" ref={el=> {newv.current[0]=el}}>
          <img className='side-images' src={Goal} alt="Raaj gym"/>
          <div className="welcome--headline">
          <h3>Our goal? Achieving yours</h3>
          <p>With Personal Training, you get individual attention from an expert who will draw up a training plan customized to get you results. You will have an expert by your side all the way who is certified and equipped with the best tools and knowledge to help you get accelerated results.</p>
           <p>At Raaj Fitness, you learn from some of the best and most passionate trainers around, you get an education that can empower you to lead a healthy and fit lifestyle.</p>
           </div>
           </div>
           <div className="why--container--wrapper" ref={el=> {newv.current[1]=el}}>
            <div className="welcome--headline">
            <h3>Benefits</h3>
            <p>Results Unleash Your Potential, One Rep at a Time! Embrace the rhythm of life at the gym. It’s not just about building muscles, it’s about building character. Every rep, every sweat drop, is a step towards a healthier you.</p>
            <p>Remember, the key to a successful fitness journey is consistency and determination. Happy training!</p>
            </div>
           </div>
          
          </div>
          
        </div>
      

        <div className="refer" >
          <div className='title'>
                <h2>Our Personal Trainer</h2>
                <div className='underline'></div>
                <div className="refer--headline">
                <p>Personal trainers are fitness professionals who motivate, guide, and help individuals reach their health and fitness goals effectively and safely. For more details reach us out at the contacts mentioned below.</p>
                </div>
            </div>
             <span className="memb--but" ><Button buttonStyle="btn--primary" buttonSize="btn--large" > Contact Us </Button> </span>
       </div>
     
     

    </>
  );
}