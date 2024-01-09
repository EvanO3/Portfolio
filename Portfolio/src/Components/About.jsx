import "../Css/App.css"
import {forwardRef} from 'react'

import { useEffect, } from "react";
import AOS from "aos"
import "aos/dist/aos.css"


const About =forwardRef((props, ref)=>{
    useEffect(()=>{
        AOS.init({
          disable:"phone",
          duration:700,
          easing:"ease-out-cubic"
        })
          },[])


        
   
         

return(
    <section ref={ref} data-aos ="fade-right">

<div className="project-Body" >
      <div className="project-Title">
         <h2>About Me</h2> 
    <p> </p>
    <p></p>
 
      </div>
        <div className="project1">
         <div className="content">
    <p style={{fontSize:"24px"}}>Get to know me!</p>
    {/**insert about me */}
        <p>I am an ambitious Information Technology student<br/> fueled by a strong passion for coding. 
        my goal is to excel as a dynamic full-stack developer, <span className="tackle">tackling challanges </span>
        head-on  innovating to create impactful web applications<br/> that resonate long after deployment
        </p>

        <p>My academic background equps me with a solid foundation in programming 
           languages and software development methodologies. However, it is my hands-on experience and commitment to continuous learning that sets me apart.
          through  internships and personal projects, I have honed my coding abilities and gained <br/> practical insights 
          into building robust and scalable applications
        
        </p>
        <div className="resume">
 <button className="resumeClass">Resume</button>

 </div>
    </div>
 <div className="Skills"  style={{fontSize:"24px"}}>
 <p>Skills</p>
 <div className="SkillSet">
 <p style={{fontSize:"20px"}}className="skillSet">HTML</p>
 <p style={{fontSize:"20px"}}className="skillSet">CSS</p>
 <p style={{fontSize:"20px"}}className="skillSet">Javascript</p>
 <p style={{fontSize:"20px"}}className="skillSet">React</p>
 <p style={{fontSize:"20px"}}className="skillSet">Java</p>
 <p style={{fontSize:"20px"}}className="skillSet">PHP basics</p>
 <p style={{fontSize:"20px"}}className="skillSet">GIT</p>
 <p style={{fontSize:"20px"}}className="skillSet">Github  <br/></p>

 <p style={{fontSize:"20px"}}className="skillSet">Microsoft Office Suite</p>

 <p style={{fontSize:"20px"}} className="skillSet">SQL</p>
 <p style={{fontSize:"20px"}}className="skillSet">R Studio</p>
 <p style={{fontSize:"20px"}}className="skillSet">SEO Optomization</p>
 <p style={{fontSize:"20px"}}className="skillSet">MatLab</p>










 </div>

 </div>
 
  </div>

         
        </div>
 
    
</section>


)

})
About.displayName = 'About';

export  default About