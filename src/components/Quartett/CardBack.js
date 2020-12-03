import React, { Component } from 'react';
import Backside from '../../img/backside.png'

class UserCardBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      }
    }

  render() {
  return (
    <div className='card grey'>
        <div className='back'>
          <p>Guetzli-Quartett</p>
        <img className ='backimg' src={Backside} alt='Guetzli-Quartett'/>
        </div>
    </div>  
  );}
}
export default UserCardBack;