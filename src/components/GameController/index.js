import React, { Component } from 'react';
import Quartett from '../Quartett'
import Landingpage from '../Landingpage'
import Ending from '../Ending'
import players from '../../const/players.js'
import { ComponentTransition, AnimationTypes } from 'react-component-transition';
import './GameController.css'; 

class GameController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ['Name','Funktion'],
      gameStat: 'welcome',
      winner:true
    }
  }
   
  quartettStart = () => {
    this.setState({gameStat:'quartett'})
  }

  ending = (winner) => {
    if (winner === 'user') {
      this.setState({winner:true,gameStat:'ending'})
      console.log('user wins')
    } 
    else {
      this.setState({winner:false,gameStat:'ending'})
      console.log('computer wins')

    }
  }

  componentDidMount = () => {
    let dice = Math.floor((Math.random() * 4));
    let newPlayer = [players[dice].name,players[dice].responsability,players[dice].color]
    this.setState({
      player:newPlayer
    })
  }

  render() {
    let content = <Landingpage player={this.state.player} quartettStart={this.quartettStart}/>
    switch (this.state.gameStat) {
      case 'welcome':
        content = <Landingpage player={this.state.player} quartettStart={this.quartettStart}/>
        break;
      case 'quartett':
        content = <Quartett player={this.state.player} ending={this.ending}/>
        break;
        case 'ending':
          content = <Ending player={this.state.player} quartettStart={this.quartettStart} winner={this.state.winner}/>
          break;
      default:
        content = <Landingpage player={this.state.player} quartettStart={this.quartettStart}/>
      }
    return (
      <ComponentTransition enterAnimation={AnimationTypes.slideRight.enter} exitAnimation={AnimationTypes.slideLeft.exit}>
        {content}         
      </ComponentTransition>
  );
  }
}

export default GameController;