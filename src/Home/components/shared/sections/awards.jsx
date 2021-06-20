import React, { useState } from 'react';

export  const Awards = () => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div className="w-100">
        <h2 className="mb-5">Awards &amp; Certifications</h2>
        <ul className="fa-ul mb-0">
        <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            1<sup>st</sup>
            Place - Infosys Inter Development Center Hackathon - 2019</li>
        </ul>
      </div>
    </section>

  );
}