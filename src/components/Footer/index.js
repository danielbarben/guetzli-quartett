import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {

  render() {
    const content = <div className='footer'><hr/><p><b>Texte: </b>Nina Kobelt und Daniel Böniger</p><p><b>Illustrationen: </b>Martina Regli</p><p><b>Code: </b>Daniel Barben</p></div>
    return <div>{content}</div>
  }
}

export default Footer;