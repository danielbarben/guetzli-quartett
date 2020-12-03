import React, { Component } from 'react';
import { ComponentTransition, AnimationTypes } from 'react-component-transition';
import Welcome from './Welcome.js'
import Instructions from './Instructions.js'

class IntroText extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      welcome:true
      }
  }    

  instructions = () => {
    this.setState({welcome:false})
  }   

render() {
  return (
    <ComponentTransition
      enterAnimation={AnimationTypes.slideRight.enter}
      exitAnimation={AnimationTypes.slideLeft.exit}
    >
    {this.state.welcome ? <Welcome player={this.props.player} instructions={this.instructions} quartettStart={this.props.quartettStart}/> : <Instructions quartettStart={this.props.quartettStart}/>}
    </ComponentTransition>
    )
  }
}
export default IntroText;
