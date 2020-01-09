import React, { Component } from 'react';


class Menu extends Component {
  render() {
    return <div className="w3-top w3-teal">
    <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
     <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"><i className="fa fa-bars"></i></a>
     {/* <a href="#/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Logo</a> */}
     <a href="#/portal" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe"></i></a>
     <a href="#/portal" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i className="fa fa-user"></i></a>
     <a href="#/portal" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i className="fa fa-envelope"></i></a>
     {/* <div class="w3-dropdown-hover w3-hide-small">
       <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>     
       <div class="w3-dropdown-content w3-card-4 w3-bar-block">
      
         <a href="#/" class="w3-bar-item w3-button">One new friend request</a>
         <a href="#/portal" class="w3-bar-item w3-button">John Doe posted on your wall</a>
         <a href="#" class="w3-bar-item w3-button">Jane likes your post</a>
       </div>
     </div> */}
     <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
       <img src="/w3images/avatar2.png" className="w3-circle"  alt="Avatar"/>
     </a>
    </div>
   </div>
  }
}

export default Menu;

