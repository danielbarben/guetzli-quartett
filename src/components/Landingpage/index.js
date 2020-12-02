import React, { Component } from 'react';
import './Landingpage.css';
import IntroHeader from './IntroHeader.js'
import IntroText from './IntroText.js'

class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
            }
  }    

render() {
    
  return (
    <div className='welcome_screen'>
      <IntroHeader player={this.props.player} />
      <IntroText player={this.props.player} quartettStart={this.props.quartettStart}/>
    </div>
  );
}
}


export default Landingpage;