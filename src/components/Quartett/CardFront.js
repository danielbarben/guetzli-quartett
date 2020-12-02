import React, { Component } from 'react';

class CardFront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //userCard:'back'
      }
    }

  render() {
  
  return (
    <div className={'card ' + this.props.cardcolor}  onClick={()=> this.props.nextclick ? this.props.next() : ''}>        
      <div>
        <div className="property">{this.props.cardproperty}</div>
        <h1 className="cookiename">{this.props.cookie.name}</h1><img className='cookie' src={this.props.image} alt=""/>
      </div>
      <div className="description">
        {this.props.description}
        </div>
      </div>
  );}
}

export default CardFront;