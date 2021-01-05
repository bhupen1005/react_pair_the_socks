import React, { Component } from "react";
import AddSocks from "./addSocksBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import ArrangeSocks from "./ArrangeSocks";
import TotalSocks from "./TotalSocks";

export default class App extends Component {
  state = {
    socksCodes: [
      { id: 1, name: "Green", color: "green" },
      { id: 2, name: "Blue", color: "blue" },
      { id: 3, name: "Purple", color: "purple" },
      { id: 4, name: "Black", color: "black" },
    ],
    socksCollection: [],
    greenSocks: [],
    blueSocks: [],
    purpleSocks: [],
    blackSocks: [],
  };

  countSocks = () => {
    let greenSocks = [];
    let blueSocks = [];
    let purpleSocks = [];
    let blackSocks = [];

    this.state.socksCollection.forEach((socks) => {
      switch (socks) {
        case "Green":
          greenSocks.push(socks);
          break;
        case "Blue":
          blueSocks.push(socks);
          break;
        case "Purple":
          purpleSocks.push(socks);
          break;
        case "Black":
          blackSocks.push(socks);
          break;
        default:
          return;
      }
    });
    this.setState({
      greenSocks,
    });
    this.setState({
      blueSocks,
    });
    this.setState({
      purpleSocks,
    });
    this.setState({
      blackSocks,
    });
  };

  handleAddSocks = (name) => {
    let socksCollection = [...this.state.socksCollection];
    socksCollection.push(name);
    this.setState({
      socksCollection,
    });
    setTimeout(() => {
      this.countSocks();
    }, 2000);
  };

  handleRandom = () => {
    let socksCollection = [...this.state.socksCollection];
    let colors = this.state.socksCodes.map((code) => code.name);
    for (let i = 0; i < 15; i++) {
      let i = colors[Math.floor(Math.random() * colors.length)];
      socksCollection.push(i);
    }
    this.setState({
      socksCollection,
    });
    setTimeout(() => {
      this.countSocks();
    }, 2000);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {this.projectTitle()}
            {this.state.socksCodes.map((code) => (
              <AddSocks
                key={code.id}
                name={code.name}
                color={code.color}
                onAddSocks={this.handleAddSocks}
              />
            ))}
            <AddSocks
              name="Random 15"
              handleRandom={this.handleRandom}
              color="grey"
            />
            <ArrangeSocks collection={this.state.socksCollection} />
          </div>
          <div className="col-sm-6">
            <TotalSocks
              blue={this.state.blueSocks}
              green={this.state.greenSocks}
              purple={this.state.purpleSocks}
              black={this.state.blackSocks}
            />
          </div>
        </div>
      </div>
    );
  }

  projectTitle() {
    return <h3 className="text-info">Pair the socks</h3>;
  }
}
