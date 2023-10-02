import './App.css';
import React from 'react';
export default function start(){
  return( 
  <div className="content">
       <header className="header">
           <h1>kyumin</h1>
           <nav className="nav">
               <ul>
                   <li><a href="about.js">About</a></li>
                   <li><a href="portfolio.js">PortFolio</a></li>
                   <li><a href="contact.js">Contact</a></li>
                   <li><a href="project.js">Project</a></li>
                   <li><a href="activity.js">Activity</a></li>
               </ul>
           </nav>
       </header>
       <main>
          <div class="container">
                <h4>Welcome</h4>
                <h2>I'm A <span>Full-Stack Developer</span></h2>
                <p>풀스택을 꿈꾸는 고등학생 개발자 박규민입니다!</p>
            </div>
       </main>
  </div>
  )
}