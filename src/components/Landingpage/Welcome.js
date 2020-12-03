import React, { Component } from 'react';

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      }
  }    

render() {
  return (
    <div><div className='ut'>Hallo, ich bin {this.props.player[0]}.</div><div className='desc'><p>{this.props.player[1]}</p><p><b>Spielst Du gegen mich?</b></p></div><div id='instructions' className='instructionsButton' onClick={this.props.instructions}>Zur Anleitung</div><div id='start' className='startButton' onClick={this.props.quartettStart}>Klar, los gehts!</div></div>
  );
}
}

export default Instructions;