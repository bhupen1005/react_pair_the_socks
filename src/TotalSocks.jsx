import React, { Component } from "react";

export default class TotalSocks extends Component {
  render() {
    return (
      <div>
        <h3 className="text-info">Display Socks</h3>
        <div>
          <span className="badge badge-success">
            Total:{" "}
            {Math.floor(
              Math.floor(this.props.blue.length / 2) +
                Math.floor(this.props.green.length / 2) +
                Math.floor(this.props.purple.length / 2) +
                Math.floor(this.props.black.length / 2)
            )}
          </span>
        </div>
        <span className="badge badge-warning m-2">
          Blue: {Math.floor(this.props.blue.length / 2)}
        </span>
        <span className="badge badge-warning m-2">
          Green: {Math.floor(this.props.green.length / 2)}
        </span>
        <span className="badge badge-warning m-2">
          Purple: {Math.floor(this.props.purple.length / 2)}
        </span>
        <span className="badge badge-warning m-2">
          Black: {Math.floor(this.props.black.length / 2)}
        </span>
      </div>
    );
  }
}
