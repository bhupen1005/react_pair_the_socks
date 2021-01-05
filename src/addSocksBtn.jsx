import React, { Component } from "react";

export default class addSocksBtn extends Component {
  /*   handleRandom = () => {
    let randomSocks = [];
    for (let i = 0; i < 15; i++) {
      let i = Math.floor(Math.random() * 4) + 1;
      randomSocks.push(i);
    }
  }; */

  render() {
    let event = this.props.onAddSocks
      ? this.props.onAddSocks
      : this.props.handleRandom;
    return (
      <React.Fragment>
        <button
          onClick={() => event(this.props.name)}
          style={{ background: `${this.props.color}`, color: "white" }}
          className="btn text-center m-4"
        >
          {this.props.name}
        </button>
      </React.Fragment>
    );
  }
}
