import React, { Component } from 'react';
import LeftColumn from './shared/leftColumn';
import RightColumn from './shared/rightColumn';
import db from '../../firebase';
import {About} from '../components/shared/sections/about';
import Menu from '../../shared/menu';
import {Experience} from '../components/shared/sections/experience';
import {Education} from '../components/shared/sections/education';
import {MySkills} from '../components/shared/sections/skills';
import {Awards} from '../components/shared/sections/awards';
import {Interest} from '../components/shared/sections/interest';
import {UserProvider} from '../components/profileContext';


class Home extends Component {

  constructor(props){
    super(props);

    this.state ={
      profileData:[]
    }
    
    var docRef = db.collection("profile").doc('flavglen')

    db.collection('orderDetails').get().then((results) => {
      results.forEach((doc) => {
        console.log(doc.data());
      });

    }).catch(err => {
      console.log('Error getting documents', err);
    });

  docRef.onSnapshot( (doc)=> {
    const profile = doc.data();
    this.formatValue(profile);
    this.setState({
      profileData: profile
    });
  });

  }

  formatValue(profile){
    profile.name =  profile.name.replace('Flavian','<span class="animated rotateIn text-primary">Flavian</span>');
  }

  componentDidMount() {
   console.log(this.context);
    /* perform a side-effect at mount using the value of MyContext */
  }
  render() {
    return <>
    <div class="container-fluid p-0">
        <LeftColumn profileData={this.state.profileData}/>
         <UserProvider value={this.state.profileData}>
            <About/>
            <Experience/>
            <Education/>
            <MySkills/>
            <Interest/>
            <Awards/>
          </UserProvider>
      </div>
      </>
  }
}

export default Home;