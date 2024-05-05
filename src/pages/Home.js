import React from "react";
import Video from '../components/Video'
import HeroSection from '../components/HeroSection'
import Reviews from"../components/Reviews"
import Features from "../components/Features"
import Gallery from "../components/Gallery";
import {gallery} from "../data"
import Membership from "../components/Membership"



export default function Home() {

  return (
    <>
      
      <HeroSection/>
      
      <Features/>
      <Gallery data={gallery}/>
      <Membership/>
      <Video url={'https://www.youtube.com/watch?v=6tqEaauXRww'}/>
      <Reviews/>

    </>
  );
}