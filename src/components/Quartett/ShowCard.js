import React, { Component } from 'react';
import { ComponentTransition, AnimationTypes } from 'react-component-transition';
import CardBack from './CardBack.js'
import CardFront from './CardFront.js'
import Images from '../../img/'
import './showcard.css'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'

class ShowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //userCard:'UserCardBack'
      }
    }
    Units = ['','g','g','min','']
    Arrows = [<Icon name='arrow down' size='tiny' />,<Icon name='arrow up' size='tiny' />,<Icon name='arrow up' size='tiny' />,<Icon name='arrow down' size='tiny' />,<Icon name='arrow up' size='tiny' />]
    Cardproperties = ['Klassiker', 'Regionale', 'Nussig', 'Exoten']
    Cardcolor = ['pink', 'orange', 'green', 'yellow']

    imageNames = {
      'Mailaenderli': Images.Mailaenderli,
      'Spitzbub': Images.Spitzbub,
      'Brunsli': Images.Brunsli,
      'Zimtstern': Images.Zimtstern,
      'Baslerlaeckerli': Images.Baslerlaeckerli,
      'Zuerchertirggel': Images.Zuerchertirggel,
      'Bernerbretzeli': Images.Bernerbretzeli,
      'Wygueteli': Images.Wygueteli,
      'Biberli' : Images.Biberli,
      'Kokosmakronen': Images.Kokosmakronen,
      'Nussstaengeli': Images.Nussstaengeli,
      'Brabanzerl': Images.Brabanzerl,
      'Chraebeli': Images.Chraebeli,
      'Spekulatius': Images.Spekulatius,
      'Vanillekipferl': Images.Vanillekipferl,
      'Grassins': Images.Grassins
    }

  render() {
    let description = ''
    let points = ''
    if (this.props.visibility) {
      switch (this.props.cookie.features[4]) {
        case 1:
          points = <div><Icon name='circle' size='small' /><span className="greybullet"><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /></span></div>
          break;
        case 1.5:
            points = <div><Icon name='circle' size='small' /><Icon name='circle outline' size='small' /><span className="greybullet"><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /></span></div>
            break;
        case 2:
          points = <div><Icon name='circle' size='small' /><Icon name='circle' size='small' /><span className="greybullet"><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /></span></div>
          break;
        case 2.5:
            points = <div><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle outline' size='small' /><span className="greybullet"><Icon name='circle' size='small' /><Icon name='circle' size='small' /></span></div>
            break;
        case 3:
          points = <div><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><span className="greybullet"><Icon name='circle' size='small' /><Icon name='circle' size='small' /></span></div>
          break;
        case 4:
          points = <div><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><span className="greybullet"><Icon name='circle' size='small' /></span></div>
          break;
        case 4.5:
          points = <div><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle outline' size='small' /></div>
            break;
        case 5:
            points = <div><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /></div>
            break;
        
        default:
          points = <div><span className="greybullet"><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /><Icon name='circle' size='small' /></span></div>
      }
         
      description = this.props.categories.map((q,i) => {
        return <div key={i} className={this.props.clickable ? 'button' : ''} onClick={()=> this.props.clickable ? this.props.compare(i) : ''}><div className={this.props.choice===i ? 'row ' + this.props.color : 'row'} id={'row'+i}><div className='fields'><div className='headline'>{q}</div><div className='text'>{i === 4 ? points : this.props.cookie.features[i]} {this.Units[i]}</div></div><div className='arrow'>{this.Arrows[i]}</div></div></div>
      })
    }
  
  return (
    <ComponentTransition
      enterAnimation={AnimationTypes.rotateY.enter}
      exitAnimation={AnimationTypes.rotateY.exit}
    >
    {this.props.visibility ? <CardFront cookie={this.props.cookie} description={description} image={this.imageNames[this.props.cookie.id]} arrows={this.Arrows} cardcolor={this.Cardcolor[this.props.cookie.cardproperty]} cardproperty={this.Cardproperties[this.props.cookie.cardproperty]} nextclick={this.props.nextclick} next={this.props.next}/> : <CardBack/>}
    </ComponentTransition>
  );}
}

export default ShowCard;