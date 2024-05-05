import { Button } from '../components/Button';
import React, { useEffect, useRef } from 'react';
import { TweenMax, gsap } from 'gsap';
import Membership from '../components/Membership';
import './Plans.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import how from '../assets/how.jpg';

gsap.registerPlugin(ScrollTrigger);
export default function Plans() {
  let newv = useRef([]);
  useEffect(() => {
    TweenMax.to(newv.current, {
      delay: 0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger: 0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.plan--info',
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);

  let cor = useRef(null);
  useEffect(() => {
    gsap.to(cor, {
      delay: 0.4,
      duration: 1,
      x: '0',
      y: '0',
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
  let corri = useRef(null);
  useEffect(() => {
    gsap.to(corri, {
      delay: 0.4,
      duration: 1,
      x: '0',
      y: '0',
      opacity: 1,
      stagger: 0.4,
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

  let mem = useRef(null);
  useEffect(() => {
    gsap.to(mem, {
      delay: 0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger: 0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: mem,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);
  let text = useRef(null);
  useEffect(() => {
    gsap.from(text, {
      delay: 0.4,
      duration: 1,
      y: '0',
      x: '0',
      opacity: 0,
      scale: 0.5,
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
    <>
      <div className="faq--header">
        <h1>Plans</h1>
      </div>
      {/*<h1 className="hi">plans</h1>*/}
      <div className="fet--contain">
        <div className="title">
          <h2>Why Raaj Fitness?</h2>
          <div className="underline"></div>
          <div className="">
            <p>
              Turn your life around with a membership that fits your life and
              needs. Whether you’re a fresh beginner or a committed expert,
              Raaj Fitness memberships are for those who craves for the best.
            </p>
          </div>
        </div>
      </div>
      <div className="plan__container">
        <div
          className="plan--info"
          ref={(el) => {
            newv.current[0] = el;
          }}
        >
          <h4>Consistent Results</h4>
          <p>
            Give your body the attention it's been craving by staying active,
            consistent, and most importantly, patient. Do the workout to see the
            results.
          </p>
        </div>
        <div
          className="plan--info"
          ref={(el) => {
            newv.current[1] = el;
          }}
        >
          <h4>Contagious Enthusiasm</h4>
          <p>
            Enjoying your workout is only part of the journey with us! Train
            with the latest fitness technologies and our up to speed health
            programs crafted for each member. After all, enthusiasm is a
            language we all speak, why not make it a daily staple?
          </p>
        </div>
        <div
          className="plan--info"
          ref={(el) => {
            newv.current[2] = el;
          }}
        >
          <h4>Sheer Convenience</h4>
          <p>
          Raaj Fitness Gym is not your typical local gym. Our membership plans and personal training programs are designed to provide you with the utmost satisfaction. We focus on quality over quantity. Join us to experience convenience and practicality at its peak, right in your neighborhood.
          </p>
        </div>
      </div>
      <div className="join-us">
        <div className="joinus--container">
          <img
            src= {how}
            alt="membership"
            ref={(el) => {
              cor = el;
            }}
          />
          <div
            className="joinus--headline"
            ref={(el) => {
              corri = el;
            }}
          >
            <h3>How to Join</h3>
            <p>
            Visit our local branch and get your fitness test done today! Joining us is easy. You can apply online or simply walk into our gym to activate your membership in minutes. At Raaj Fitness Gym, we’re not just a gym, we’re your partners in fitness. Our memberships are your gateway to achieving your fitness goals. Train for the future with us, your fitness ambitions are just a workout away.
            </p>
            <Button buttonStyle="btn--primary" buttonSize="btn--large">
              Join Us{' '}
            </Button>
          </div>
        </div>
      </div>
      <div
        className="plans--ben"
        ref={(el) => {
          mem = el;
        }}
      >
        <div className="title">
          <h2>Membership Benefits</h2>
          <div className="underline"></div>
        </div>
        <div className="plans--ben--cont">
          <div className="plans-b">
            <p>
              <i className="fas fa-check-circle"></i>Personalized Workouts
            </p>
            <p>
              <i className="fas fa-check-circle"></i>State-of-the-Art Equipment
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Fitness Assessments
            </p>
          </div>
          <div className="plans-b">
            <p>
              <i className="fas fa-check-circle"></i>Group Classes
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Nutrition Guidance
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Flexible Timings{' '}
            </p>
          </div>
          <div className="plans-b">
            <p>
              <i className="fas fa-check-circle"></i>Clean and Hygienic Environment
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Community Support
            </p>
            <p>
              <i className="fas fa-check-circle"></i>Affordable Membership
            </p>
          </div>
        </div>
        <span className="memb--but">
          <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
          </Button>{' '}
        </span>
      </div>
      <Membership />
      <div
        className="refer"
        ref={(el) => {
          text = el;
        }}
      >
        

        <span className="memb--but">
          <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
          </Button>{' '}
        </span>
      </div>
    </>
  );
}
