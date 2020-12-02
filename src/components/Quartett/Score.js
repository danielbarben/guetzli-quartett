import React, { Component } from 'react';
import './score.css'

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //messagechange:0

      }
    }

  componentDidUpdate = () => {
    let test = document.getElementById('message')
    test.className='invisible';
    setTimeout(() => test.className='fade-in', 200);
  }

  render() {
  
  return (

    <div className='score'>
      <p>Du <span className='number'>{this.props.playerscore} : {this.props.computerscore}</span> {this.props.player[0]}</p>
      <p id="message">{this.props.message}</p>    
    </div>  

  );}

}

export default Score;

