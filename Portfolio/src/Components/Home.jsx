
import"../Css/App.css"
import"../Css/reset.css"
import { LuMoonStar } from "react-icons/lu";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){

  return(
    <>
<nav className="navBar">
  <div className="Left-Nav">
   <h2>Developed by Evan</h2>
   <li >
    <a className="list-item"href="#">Home</a>
    <a className="list-item"href="#">About</a>
    <a className="list-item"href="#">Skills</a>
    <a className="list-item"href="#">Projects</a>
   </li>
  </div>

  <div className="Right-Nav">
    <li>
      <LuMoonStar/>
      <a className="list-item"href="#">Contact</a>
    </li>
  </div>
</nav>


 
 





 
    </>
  )
}


