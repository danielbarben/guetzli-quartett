import React, { Component } from 'react';
import './score.css'

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
    }

  componentDidUpdate = () => {
    let effect = document.getElementById('message')
    effect.className='invisible';
    setTimeout(() => effect.className='fade-in', 200);
  }

  render() {
  
  return (
    <div className='scorebar'>
      <p id='score'>Du <span className='number'><span className={this.props.playerscore < this.props.computerscore ? 'loosertext' : 'winnertext'}>{this.props.playerscore}</span> : <span className={this.props.computerscore < this.props.playerscore ? 'loosertext' : 'winnertext'}>{this.props.computerscore}</span></span> {this.props.player[0]}</p>
      <p id='message'>{this.props.message}</p>    
    </div>  
  );}
}

export default Score;

