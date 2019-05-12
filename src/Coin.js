import React, { Component } from 'react';

class Coin extends Component {
  render() {
    return (
      <div className="coin">
        <img src={this.props.info.imgsrc} alt={this.props.info.side}/>
      </div>
    )
  }
}
export default Coin
