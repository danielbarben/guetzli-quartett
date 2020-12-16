import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './footer.css'

class Footer extends Component {

  render() {
    const content = <div className='footer'>
     <p><Icon name='download' /><a href={'https://www.tagesanzeiger.ch/spielen-bis-der-ofen-glueht-887846514959'} rel="noopener noreferrer" target="_blank">Die Spielkarten als PDF finden Sie hier!</a></p>
    
      <p><Icon name='comments' />Haben Sie Anmerkungen oder einen Fehler entdeckt?
Wir freuen uns über ihre Nachricht an <a href="mailto:daniel.barben@tamedia.ch">daniel.barben@tamedia.ch.</a></p>
    <table>
      <tbody>
      <tr>
        <td className="work">Texte</td><td className="name">Nina Kobelt und<br/>Daniel Böniger</td>
      </tr>
      <tr>
        <td className="work">Illustrationen</td><td className="name">Martina Regli</td>
      </tr>
      <tr>
        <td className="work">Code</td><td className="name">Daniel Barben</td>
        </tr>
        </tbody>
      </table>
      </div>
    return <div>{content}</div>
  }
}

export default Footer;