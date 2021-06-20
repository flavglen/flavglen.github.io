import React, { useState } from 'react';

export  const Experience = () => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Technology Analyst</h3>
          <div className="subheading mb-3">Infosys Limited - Canada</div>

          <div class="respone-wrapper"> 
            <h6>
                Key Qualifications & Responsibilities
            </h6>

            <div class="response">
              <ul>
                <li> Developed Complex web Applicatins by using latest UI framewroks </li>
                <li> Standardized all output with a new, responsive, mobile-first approach and strategy.</li>
                <li> Assessed UX and UI designs for technical feasibility.</li>
                <li> Implemented new features and UI in an Agile environment in collaboration with clients and project team. </li>
                <li> Maintain code quality with Unit testing and automation tools </li>
                <li> Lead Team of 5 members </li>
                <li> Conduct code reviews and ensure code quality is not compromised</li>
              </ul>
            </div> 
          </div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">January 2017 - Present</span>
        </div>
      </div>

      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">Software Engineer</h3>
          <div className="subheading mb-3">Bolas Intelli Solutions - INDIA</div>
          <div class="respone-wrapper"> 
            <h6>
                Key Qualifications & Responsibilities
            </h6>

            <div class="response">
              <ul>
                <li> Creating web and mobile applications  </li>
                <li> Maintaining, optimizing, troubleshooting, and improving web applications </li>
                <li> Assessed UX and UI designs for technical feasibility.</li>
                <li> Developed standard and ad hoc reports in graph format as required.</li>
                <li> Built an ecommerce webapp to sell products online. Increased company sales by 30%. </li>
              </ul>
            </div> 
          </div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">October 2014 - January 2017</span>
        </div>
      </div>


    </div>

  </section>
  );
}