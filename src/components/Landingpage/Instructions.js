import React, { Component } from 'react';
//import './Welcome.css';
//import CookieBar from '../../img/cookiebar.jpg'
//import WelcomeHeader from './WelcomeHeader.js'

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      }
  }    

render() {
  return (
    <div><div className="ut">So spielen wir</div><div className="desc"><p>Wir spielen mit 16 Quartettkarten. Jeder bekommt 8.</p><p>Du siehst jeweils eine Deiner Karten. Tippe auf das Kriterium, von dem Du denkst, dass Dein Guetzli unschlagbar ist.</p><p>Ich zeige Dir danach meine Karte. Wer gewinnt, bekommt beide Karten.</p><p>Verloren hat, wer zuerst keine Karten mehr hat.</p><div id="start" className="startButton" onClick={this.props.quartettStart}>Zum Spiel!</div></div></div>
  );
}
}

export default Instructions;