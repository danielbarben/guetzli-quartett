import React, { Component } from 'react';

class IntroHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ['Name','Funktion'],
      gameStat: 'welcome',
    }
  }
  render () {
    return <div className={'header ' + this.props.player[2]}><div className='ht'>Willkommen zum<br/><b>Guetzli-Quartett</b></div><div className='cookiebar'></div></div>
  }
}
  export default IntroHeader