import React, { Component } from 'react';
import Skills from './skills';
import $ from 'jquery';

class LeftColumn extends Component {
  constructor(props){
    super(props);

    $('.js-scroll-trigger').click(function() { // [href*="#"] :not([href="#"]) 
    if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  }

  clickNav(pathName){

    var target = $('#' + pathName);
    if (target.length) {
      $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000);
        return false;
      }
    
    console.log(target);
  }
  
  
  render() {
    // return  <div className="w3-third">
    
    //   <div className="w3-white w3-text-grey w3-card-2">
    //     <div className="w3-card-2">
    //     <img src={process.env.PUBLIC_URL + '/images/pp.jpg'} alt="Glen Pais" className="w3-border animated pulse profilePic"/> 
    //       <div className="w3-container">
    //         <h4><b>{this.props.profileData.name}</b></h4>
    //         <p>{this.props.profileData.designation}</p>
    //       </div>
    //     </div>
    //     <div className="w3-container"> 
    //       <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.designation}</p>
    //       <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.location} </p>
    //       <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.email}</p>
    //       <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.props.profileData.mobile}</p>
          
    //       <Skills/>

    //     </div>
    //   </div>

    
    // </div>

    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger">
          <span className="d-block d-lg-none">Clarence Taylor</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL + '/images/pp.jpg'} />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a onClick={() => this.clickNav('about')} className="nav-link  js-scroll-trigger" href="#/home/about">About</a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.clickNav('experience')} className="nav-link js-scroll-trigger" href="#/home/experience">Experience</a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.clickNav('education')} className="nav-link js-scroll-trigger" href="#/home/education">Education</a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.clickNav('skills')} className="nav-link js-scroll-trigger" href="#/home/skills">Skills</a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.clickNav('interests')} className="nav-link js-scroll-trigger" href="#/home/interests">Interests</a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.clickNav('awards')} className="nav-link js-scroll-trigger" href="#/home/awards">Awards</a>
            </li>
          </ul>
        </div>
      </nav>
  }
}

export default LeftColumn;

