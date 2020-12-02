import React, { Component } from 'react';
//import { ComponentTransition, AnimationTypes } from "react-component-transition";
//import Welcome from './Welcome.js'
//import Instructions from './Instructions.js'

class EndingText extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      //welcome:true
      }
  }    

  instructions = () => {
    this.setState({welcome:false})
  }   

render() {
  return (
    <div><div className="ut">&nbsp;</div><div className="desc"><p>Ich hoffe, dass Dir das Spiel gefallen hat und dass Du etwas über Weihnachts-Guetzli gelernt hast.</p><p><b>Spielen wir noch einmal?</b></p></div><div id="start" className="startButton" onClick={this.props.quartettStart}>Klar, los gehts!</div></div>
    )
  }
}
export default EndingText;
