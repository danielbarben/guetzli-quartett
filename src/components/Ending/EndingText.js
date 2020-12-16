import React, { Component } from 'react';

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
    <div><div className='ut'>&nbsp;</div><div className='desc'><p>Ich hoffe, dass dir das Spiel gefallen hat und dass du etwas über Weihnachtsguetzli gelernt hast.</p><p><b>Spielen wir noch einmal?</b></p></div><div id='start' className='startButton' onClick={this.props.quartettStart}>Klar, los gehts!</div></div>
    )
  }
}
export default EndingText;