import React, { Component } from 'react'
import Coin from './Coin';

class Flip extends Component {

  static defaultProps = {
    coins: [
      {side: "heads", imgsrc:"https://tinyurl.com/react-coin-heads-jpg"},
      {side: "tails", imgsrc:"https://tinyurl.com/react-coin-tails-jpg"}
    ],
    header: 'Lets flip a coin'
  }

  constructor(props){
    super();
    this.state = {
      count: 0,
      headsCount: 0,
      tailsCount: 0,
      currentCoin: null
    }
  }

  choice = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  flipcoin = () => {
    const newCoin = this.choice(this.props.coins);
    this.setState(currState => {
      return {
        currentCoin: newCoin,
        count: currState.count + 1,
        headsCount: currState.headsCount + (newCoin.side === "heads" ? 1 : 0),
        tailsCount: currState.tailsCount + (newCoin.side === "tails" ? 1 : 0)
      }
    })
  }

  handleClick = () => {
    this.flipcoin();
  }

  render() {
    return (
      <div className="flips">
        <h1>{this.props.header}</h1>
         {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
        <button className="btn" onClick={this.handleClick}>Generate</button>
        <p>Your counts are : {this.state.count}</p>
        <p>Heads Score: {this.state.headsCount} heads</p>
        <p>Tails Score: {this.state.tailsCount} tails</p>
      </div>
    )
  }
}
export default Flip;
