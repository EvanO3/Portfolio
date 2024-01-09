
import weatherApp from '../img/WeatherApp.jpg'
import mealTracker from '../img/mealTracker.jpg'
export default function Project (){
    return (
        <section >
       <div className="project-Body">
     
        <h2>Projects</h2> 
       <p>Here you will find some of my personal projects that <br/>i have worked on with links to them included</p>

       <div className="project1">
        <div className="content">
   <p style={{fontSize:"24px"}}>Weather App</p>
   <p>This is a responsive weather app created using <br/>HTML CSS and Javascripot to provide real weather<br/> information to users
    It uses a WeatherAPI to fetch<br/> weather data for user-specified locations, utalizing<br/> asynchronous javascript (async/await) for efficient data <br/>retreval and rendering.
    </p>
   </div>
<div className="Weatherimg">
<a href="https://evano3.github.io/WeatherApp/">
<img src={weatherApp} style={{width:"400px", height:"300px"}}  alt="Weather Project" />
</a>
</div>
 </div>

 <div className="project1">
        <div className="content">


   <p style={{fontSize:"24px"}}>NUTRITRACKR</p>
   <p> NutriTracker is a user-friendly platform developed with<br/> HTML CSS Javascript and a touch of PHP. Users can<br/> effortlessly sign up, create accounts, log their daily <br/>food intake,
   and convieniently track the total nutrients <br/> of each meal. With a dedicated "Todays List"  feature<br/> users can easily select, monitor and delete <br/>the specific foods they've consumed<br/>throughout the day, making health-conscious 
   choices<br/> more accessible.
     </p>
   </div>
<div className="Weatherimg">
<a href="#">
<img src={mealTracker} style={{width:"400px", height:"300px"}}  alt="Weather Project" />
</a>

</div>
       </div>

       <div className="project1">
        <div className="content">


   <p style={{fontSize:"24px"}}>DreamThenAchieve</p>
  <p></p>
   </div>
<div className="Weatherimg">
<a href="#">
<img src={} style={{width:"400px", height:"300px"}}  alt="Weather Project" />
</a>

</div>
       </div>


       
  
  
      



        
       </div>
       </section>
    )
}