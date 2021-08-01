
import React, { useState } from 'react';

export  const Education = () => {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div class="w-100">
        <h2 class="mb-5">Education</h2>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">Mangalore University</h3>
            <div class="subheading mb-3">Master of Computer Applications (MCA)</div>
            <div>Computer Science - Windows / Web Applications Track</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">October 2001 - July 2014</span>
          </div>
        </div>

        <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div class="resume-content">
            <h3 class="mb-0">St.Aloysisus College</h3>
            <div class="subheading mb-3">Bachelor of Commerce (BCOM)</div>
          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary">June 2008 - Jun 2011</span>
          </div>
        </div>

      </div>
    </section>
  );
}
