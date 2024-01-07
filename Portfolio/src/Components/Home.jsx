
import"../Css/App.css"
import"../Css/reset.css"
//imported logos from library
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useRef } from "react";
import About from "./About"
//imported animation from libaray
import AOS from "aos"
import "aos/dist/aos.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Memoji from "../img/Memoji.jpg"

export default function Home(){
  //scroll into view from the About page
const aboutRef = useRef();

  useEffect(()=>{
AOS.init({
  disable:"phone",
  duration:700,
  easing:"ease-out-cubic"
})
  },[])

  const scrollToAbout = () =>{
    console.log('Scrolled')
    aboutRef.current?.scrollIntoView({behavior:'smooth'});
  };

  return(
    <>
<nav className="navBar">
  <div className="Left-Nav">
   <h3>Developed by Evan</h3>
  
  </div>

  <div className="Right-Nav">
    <li>
    <a className="list-item"href="#">Home</a>
    <a className="list-item"href="#">About</a>
    <a className="list-item"href="#">Skills</a>
    <a className="list-item"href="#">Projects</a>
      <a className="list-item"href="#">Contact</a>
      <a className ="list-item" href="">
        <LuMoonStar
        style={{fontSize: "25px"}}
        />
        </a>
    </li>
  </div>
</nav>

{/**Main body */}
<section>

<div data-aos ="fade-right"className="body-left">
  
  <div className="left-text">
    <span style={{fontSize: "20px"}}>Hi There <p className="Wave">👋🏾</p> I'm</span>
    <h1 style={{fontSize: "35px"}}>Evan </h1>
    <h1 style={{fontSize: "35px"}}> and I'm  an Information Technology <br/>Student</h1>
   
    <div className="icons">
    <BsLinkedin
    style={{fontSize:"20px"}}/>
    <FaGithub
    style={{fontSize:"20px"}}/>
    </div>

   
    <div className="animateArrow">
  <FaArrowDown
  onClick={scrollToAbout}
  style ={{fontSize:"30px"}}
  />

  </div>
  </div>
<div className="right-container">
<div className="right-text">
<img className="imgMemoji" style ={{width: "300px"}}src={Memoji} alt="" />
</div>
</div>

</div>
</section>

<About ref={aboutRef}/>



 
 





 
    </>
  )
}


