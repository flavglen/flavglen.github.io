import React, { Component } from 'react';
import LeftColumn from './shared/leftColumn';
import RightColumn from './shared/rightColumn';
import db from '../../firebase';

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



    


  // let setSf = docRef.set({designation: "",
  // location: "ff",
  // mobile: "ff",
  // name: "f"});

  // gg.then(doc => {
  //      console.log('Document data:', doc);
  //    })
  //    .catch(err => {
  //      console.log('Error getting document', err);
  //    });

    let getDoc = docRef.get()
  .then(doc => {
    this.setState({
      profileData: doc.data()
    })
  })
  .catch(err => {
    console.log('Error getting document', err);
  });

  }
  render() {
    return  <div className="w3-content w3-margin-top-72"> {/*style="max-width:1400px;"*/}
      <div className="w3-row-padding">
         <LeftColumn profileData={this.state.profileData}/>
         <RightColumn/>
       </div>
      </div>
  }
}

export default Home;