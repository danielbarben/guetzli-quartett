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
    <div><div className='ut'>So spielen wir</div><div className='desc'><p>Wir spielen mit 16 Quartett-Karten. Jeder bekommt 8 davon.</p><p>Du siehst jeweils eine deiner Karten. Tippe auf die Eigenschaft, von der du denkst, dass sie dein Guetzli unschlagbar macht. Der Pfeil gibt dir an, ob der höhere oder der tiefere Wert gewinnt.</p><p>Ich zeige dir danach meine Karte. Wer die Runde gewinnt, bekommt beide Karten.</p><p>Das Spiel verloren hat, wer zuerst keine Karten mehr hat.</p><div id='start' className='startButton' onClick={this.props.quartettStart}>Zum Spiel!</div></div></div>
  );
}
}

export default Instructions;