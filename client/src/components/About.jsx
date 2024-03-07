import React, {Fragment} from 'react';
import "../styles/About.css";
const About= () => {
    return (
            <section className="about-container">
               <div className='about'>
               <iframe className='about-frame'  width="560" height="315" src="https://www.youtube.com/embed/lA1Gtx2tFEI" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               <div className='about-text'>
                 <span>About</span>
                 <p>Bhumi was founded on August 15, 2006 by a group of friends, who believed that every underprivileged child deserves quality education. Since then, Bhumi has transformed this conviction into a volunteering opportunity for India’s youth, launching a snowball effect of nurturing talent on the path to an educated, poverty-free India.</p>
               </div>
               </div> 
            </section>
    );
}
export default About;
