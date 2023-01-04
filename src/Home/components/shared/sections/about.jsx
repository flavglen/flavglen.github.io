import React, { useState,useContext } from 'react';
import UserContext from '../../profileContext';
export  const About = () => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);
  //  

  const userCtx = useContext(UserContext);

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <code class="profile-name"> &lt;
          <span className="mb-0 animate__fadeInUp"><code dangerouslySetInnerHTML={{__html: userCtx.name}}></code></span>
         /&gt; </code>
        <div className="subheading mb-5">{userCtx.location} · {userCtx.mobile}·
          <a href={'mailto:'+userCtx.email}>{userCtx.email}</a>
        </div>
        <p className="lead mb-5">
          I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my seven years in this industry, 
          I've honed my analytical thinking and collaboration skills, and I love working with a team.!
        </p>
        <div className="social-icons">
          <a target="_blank" href="https://www.linkedin.com/in/flavglen">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="http://flavglen.github.io">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}