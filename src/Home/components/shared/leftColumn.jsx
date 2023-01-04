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
  }
  
  
  render() {

    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger">
          <span className="d-block d-lg-none">Glen Flavian Pais</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL + '/images/pp_new.jpg'} />
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-left">
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

