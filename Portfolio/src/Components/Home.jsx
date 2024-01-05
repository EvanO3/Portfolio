
import"../Css/App.css"
import"../Css/reset.css"
import { LuMoonStar } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){

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
      <a className ="list-item" href=""><LuMoonStar/></a>
      <a className="list-item"href="#">Contact</a>
    </li>
  </div>
</nav>

{/**Main body */}
<section>
<div className="body-left">
  <div className="left-text">
    <span style={{fontSize: "20px"}}>Hi There <p className="Wave">👋🏾</p> I'm</span>
    <h1 style={{fontSize: "50px"}}>Evan Oni</h1>
    <h1 style={{fontSize: "50px"}}>Information Technology <br/>Student</h1>
    
  </div>
  <div className="animateArrow">
  <FaArrowDown
  style ={{fontSize:"30px"}}
  
  />

  </div>

</div>
</section>


 
 





 
    </>
  )
}


