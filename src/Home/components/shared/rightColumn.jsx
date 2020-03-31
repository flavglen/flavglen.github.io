
import React, { Component } from 'react';


class RightColumn extends Component {
  render() {
    return <div className="w3-twothird">
    <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16 animated rotateIn"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
      <div className="w3-container">
        <h5 className="w3-opacity animated zoomInLeft"><b>Technology Analyst @ Infosys Ltd</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2017 - <span className="w3-tag w3-blue-grayw3-round">Current</span></h6>
        <p>Working as MEAN/ERN/UI stack developer </p>

      </div>
      <div className="w3-container">
        <h5 className="w3-opacity animated zoomInRight"><b>Software Engineer @ Bolas Intelli Solutions Pvt ltd</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Oct 2014 - Jan 2017</h6>
        <p>Worked as Fullstack Developer in various technolgies like PHP,Angularjs,HTML,CSS.I have also worked on PHP frameworks like Laravel,Codeigniter</p>
      
      </div>
    
    </div>
    
    <div className="w3-container w3-card-2 w3-white">
      <h2 className="w3-text-grey w3-padding-16 animated rotateIn" ><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
      <div className="w3-container animated zoomInRight">
        <h5 className="w3-opacity"><b>Masters of Computer Applications (MCA)-Mangalore University</b></h5>
        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2011 - 2014</h6>
        <p></p>
          <div className="w3-panel w3-leftbar w3-light-grey">
            <p className="w3-xlarge w3-serif">
            <i>"A Place where i learnt Computer Science basics.!!"</i></p>
          </div>
     
      </div>
    
    
    </div>
    </div>


  }

}

export default RightColumn;
