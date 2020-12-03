import React, { Component } from 'react';

class EndingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //player: ['Name','Funktion'],
      //gameStat: 'welcome',
    }
  }
  render () {
    return <div className={'header ' + this.props.player[2]}>{this.props.winner ? <div className='ht'>Gratuliere,<br/><b>Du hast gewonnen!</b></div> : <div className='ht'>Hoppla,<br/><b>ich habe gewonnen!</b></div>}<div className='cookiebar'></div></div>
  }
}
  export default EndingHeader