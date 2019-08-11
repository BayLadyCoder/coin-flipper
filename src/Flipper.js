import React, { Component } from "react";
import Coin from "./Coin";

class Flipper extends Component {
  static defaultProps = {
    headImg: "https://tinyurl.com/react-coin-heads-jpg",
    tailImg: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
  };

  constructor(props) {
    super(props);
    this.state = {
      coin: "head",
      head: 0,
      tail: 0,
      totalFlips: 0
    };

    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    let randFlip = Math.floor(Math.random() * 2);

    this.setState(curState => {
      return {
        coin: randFlip === 0 ? "head" : "tail",
        head: curState.head + (randFlip === 0 ? 1 : 0),
        tail: curState.tail + (randFlip === 1 ? 1 : 0),
        totalFlips: curState.totalFlips + 1
      };
    });
  }

  render() {
    return (
      <div className="Flipper">
        <Coin
          value={this.state.coin}
          img={
            this.state.coin === "head" ? this.props.headImg : this.props.tailImg
          }
        />
        <p>
          Out of {this.state.totalFlips}, there have been {this.state.head}{" "}
          heads and {this.state.tail} tails.
        </p>
        <button onClick={this.flipCoin}>Flip Coin</button>
      </div>
    );
  }
}

export default Flipper;
