import React, { useState,useContext } from 'react';
import UserContext from '../../profileContext';
export  const About = () => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  const userCtx = useContext(UserContext);
console.log(userCtx);
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0" dangerouslySetInnerHTML={{__html: userCtx.name}}></h1>
        <div className="subheading mb-5">{userCtx.location} · {userCtx.mobile}·
          <a href={'mailto:'+userCtx.email}>{userCtx.email}</a>
        </div>
        <p className="lead mb-5">
          I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my seven years in this industry, 
          I've honed my analytical thinking and collaboration skills, and I love working with a team.!
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
}