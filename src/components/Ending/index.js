import React, { Component } from 'react';
//import './Landingpage.css';
import EndingHeader from './EndingHeader.js'
import EndingText from './EndingText.js'

class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      //winner:false
            }
  }    

render() {
    
  return (
    <div className='welcome_screen'>
      <EndingHeader player={this.props.player} winner={this.props.winner}/>
      <EndingText quartettStart={this.props.quartettStart}/>
    </div>
  );
}
}


export default Landingpage;