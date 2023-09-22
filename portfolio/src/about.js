import './about.css';
import React from 'react';
export default function start(){
  return( 
  <div className="content">
       <header className="header">
           <h1>kyumin</h1>
           <nav className="nav">
               <ul>
                   <li><a herf="about.js">About</a></li>
                   <li><a herf="portfolio.js">PortFolio</a></li>
                   <li><a herf="contact.js">Contact</a></li>
                   <li><a herf="project.js">Project</a></li>
                   <li><a herf="activity.js">Activity</a></li>
               </ul>
           </nav>
       </header>
  </div>
  )
}