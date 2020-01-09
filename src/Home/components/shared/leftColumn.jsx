import React, { Component } from 'react';
import Skills from './skills';

class LeftColumn extends Component {
  render() {
    return  <div className="w3-third">
    
      <div className="w3-white w3-text-grey w3-card-2">
        <div className="w3-card-2">  {/*style="width:100%"*/}
        <img src={process.env.PUBLIC_URL + '/images/pp.jpg'} alt="Glen Pais" className="w3-border animated pulse profilePic"/> 
          <div className="w3-container">
            <h4><b>{this.props.profileData.name}</b></h4>
            <p>{this.props.profileData.designation}</p>
          </div>
        </div>
        <div className="w3-container"> {/*style="margin-bottom:25px;"*/}
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.designation}</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.location} </p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.email}</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.mobile}</p>
          
         {/*Skills component"*/}
          <Skills/>

        </div>
      </div>

    
    </div>

    
  }
}

export default LeftColumn;

