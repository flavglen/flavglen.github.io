import React, { Component } from 'react';
import db from '../../../firebase';

class Skills extends Component {
    
    constructor(props) {
        super(props);
    
        this.state ={
          skillData:[]
        }

        var docRef = db.collection("skills").doc('flavglen');

        docRef.onSnapshot( (doc)=> {
           
            this.setState({
                skillData: doc.data()
               })
        });
        
        /*let getDoc = docRef.get()
        .then(doc => {
            this.setState({
             skillData: doc.data()
            })
           
        })
        .catch(err => {
            console.log('Error getting document', err);
        });*/

      

    }

  render() {
      const {skillData}= this.state;
      const skillset = Object.keys(skillData).map(x=>  <div class="mb25"> 
        <p>{x.toUpperCase()}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-blue-gray" style={{ width: skillData[x].rating+'%' }}> 
            <div className="w3-center w3-text-white">{skillData[x].rating}%</div>
            </div>
        </div>
        </div> );
     
    return <React.Fragment> 
          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>

             {skillset}
          
        
          </React.Fragment> 
        

    
  }
}

export default Skills;

