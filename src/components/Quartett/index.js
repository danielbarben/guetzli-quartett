import React, { Component } from 'react';
import './quartett.css';
//import Brunsli from '../../img/brunsli.png'
//import Images from '../../img/'
import ShowCard from './ShowCard.js'
import Score from './Score.js'
import cards  from '../../const/cards.js'
import categories from '../../const/categories.js'
import messages from '../../const/messages.js'

class Quartett extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCards:[],
      userWins: false,
      computersCards:[],
      computerWins:false,
      clickable:true,
      nextclick:false, //Neue Karte zeigen
      choice:'',
      message:'Tippe auf eine Eigenschaft.',
      showUserCard:false,
      showComputerCard:false,
      winner: ''
      }
    }

correction = [-1, -1, -1, 1, 1]
Arrows = ['↓','↓','↓','↑','↑']

// Karten mischeln
shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  console.log('shuffled')
  return a;
}

// Karten mischeln und verteilen
verteilen = () => {
  let allCards = [];
  for (let el in cards) {
    allCards.push(Number(el))
  }
  //mischeln
  this.shuffle(allCards)
  //verteilen
  let newUser = allCards.slice(0, (allCards.length)/2);
  let newComputer = allCards.slice((allCards.length)/2,allCards.length)
  this.setState({
    usersCards : newUser,
    computersCards: newComputer,
    message:messages.shuffling
  })
  setTimeout(() => this.setState({message:messages.start,showUserCard: true}), 1000);
}


next = () => {
  //Nextclick verbieten
  this.setState({
    showComputerCard:false,
    showUserCard:false,
    nextclick:false,
    choice:'',
    computerWins:false,
    userWins:false,
    message:messages['next']
  })
  if (!this.state.winner) {
    

  if (this.state.userWins && this.state.computerWins) {
    //unentschieden
    let newUser = this.state.usersCards.slice()
    let newComputer = this.state.computersCards.slice()
    this.shuffle(newUser)
    this.shuffle(newComputer)
    this.setState({
      usersCards: newUser,
      computersCards: newComputer
    })
  }
  
  else if (this.state.userWins) {
    //Tauschkarte
    let tmp = this.state.usersCards[0]
    //beim user wegnehmen, beim Computer hinzufügen
    let newComputer = this.state.computersCards.slice()
    newComputer.push(tmp)
    this.shuffle(newComputer)
    let newUser = this.state.usersCards.slice()
    newUser.shift()
    this.setState({
      usersCards: newUser,
      computersCards: newComputer
    })
  }
  else {
    //computer wins
    //Tauschkarte
    let tmp = this.state.computersCards[0]
    //beim compuer wegnehmen, beim Computer hinzufügen
    let newUser = this.state.usersCards.slice()
    newUser.push(tmp)
    this.shuffle(newUser)
    let newComputer = this.state.computersCards.slice()
    newComputer.shift()
    this.setState({
      usersCards: newUser,
      computersCards: newComputer
    })
  }
  


  setTimeout(() => this.setState({
    showUserCard: true,
    clickable:true
  }), 1000);
}

// HIER WEITERFAHREN
  else {this.props.ending(this.state.winner)}
}

compare = (choice) => {
  // Buttons deaktivieren, gewählten einfärben, Computerkarte drehen, Nextclick erlauben
  this.setState({
    clickable:false,
    choice:choice,
    showComputerCard:true,
    nextclick:true
  })
  // Werte ermitteln und vergleichbar machen
  let usersValue = cards[this.state.usersCards[0]].features[choice] * this.correction[choice];
  let computersValue = cards[this.state.computersCards[0]].features[choice] * this.correction[choice]; 
  // Gewinner in den State schreiben
  
  //user gewinnt
  if (usersValue > computersValue) {
    //letzte Karte?
    if (this.state.usersCards.length === 1) {
      this.setState({winner:'user'})
      console.log('user gewinnt')
    }
    this.setState({
      message: messages['youwin'],
      userWins:true
    })
  }
  //computer gewinnt
  else if (usersValue < computersValue) {
    //letzte Karte
    if (this.state.computersCards.length === 1) {
      this.setState({winner:'computer'})
      console.log('computer gewinnt')
    }
    this.setState({
      message:this.props.player[0] + messages['computerwins'], 
      computerWins:true
    })
  }
  else {
    this.setState({
      message: messages['drawn'],
      computerWins:true,
      userWins:true
    })
  }

}

componentDidMount() {
this.verteilen();
}

render() {
  return <div>
    <ShowCard visibility={this.state.showComputerCard} nextclick={false} next={this.next} cookie={cards[this.state.computersCards[0]]} clickable={false} categories={categories} compare={false} choice={this.state.choice} color={this.state.computerWins ? 'winner' : 'looser'}/>
    <div className='left'>{this.props.player[0]}'s Karte</div>
    <Score playerscore={this.state.usersCards.length} player={this.props.player} computerscore={this.state.computersCards.length} message={this.state.message} messagechange={this.state.messagechange}/>
    <div className='left'>Deine Karte</div>
    <ShowCard visibility={this.state.showUserCard} nextclick={this.state.nextclick} next={this.next} cookie={cards[this.state.usersCards[0]]} clickable={this.state.clickable} categories={categories} compare={this.compare} choice={this.state.choice} color={this.state.userWins ? 'winner' : 'looser'}/>
    </div>
  }
}

export default Quartett;