import "../Css/App.css"
import {forwardRef} from 'react'
import photo from '../img/Photo.jpg'
import {useEffect} from "react"
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
    <section ref={ref}>

    <div className="About-me" data-aos ="fade-right">
    <div className="about-left">
        <h2>About Me</h2>
        <p>I am an ambitious Information Technology student<br/> fueled by a strong passion for coding. 
        my goal is to<br/> excel as a dynamic full-stack developer, <span className="tackle">tackling challanges</span><br/>
        head-on  innovating to create impactful web applications<br/> that resonate long after deployment
        </p>

        <p>My academic background equps me with a solid foundation in programming <br/>
           languages and software development methodologies. However, it is my hands-on <br/>
          experince and commitment to continuous learning that sets me apart.
          through <br/> internships and personal projects, I have honed my coding abilities and gained <br/> practical insights 
          into building robust and scalable applications
        
        </p>
      </div>
      <div className="About-rightCon">
        <div className="About-right">
            <img  className="imgPhoto" src={photo} style ={{width:"200px"}} alt="" />
        </div>
      </div> 
    </div>
   
 
    
</section>

)

})
About.displayName = 'About';

export  default About