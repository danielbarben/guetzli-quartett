import React, { Component } from 'react';
import { ComponentTransition, AnimationTypes } from "react-component-transition";
import CardBack from './CardBack.js'
import CardFront from './CardFront.js'
import Images from '../../img/'
import './showcard.css'

class ShosUserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //userCard:'UserCardBack'
      }
    }
    Units = ['','g','g','min','']
    Arrows = ['↓','↓','↓','↑','↑']
    Cardproperties = ['Klassiker', 'Regionale', 'Nüsse', 'Exoten']
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
    if (this.props.visibility) {
      description = this.props.categories.map((q,i) => {
        return <div key={i} className={this.props.clickable ? 'button' : ''} onClick={()=> this.props.clickable ? this.props.compare(i) : ''}><div className={this.props.choice===i ? 'row ' + this.props.color : 'row'} id={'row'+i}><div className='fields'><div className='headline'>{q}</div><div className='text'>{this.props.cookie.features[i]} {this.Units[i]}</div></div><div className='arrow'>{this.Arrows[i]}</div></div></div>
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

export default ShosUserCard;