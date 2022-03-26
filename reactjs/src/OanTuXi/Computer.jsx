import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top:-50px;}
      25% {top:100px;}
      50% {top:-50px;}
      75% {top:100px;}
      100% {top:0;}
    }`;
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <style>
          {keyframe}
        </style>
        <div className="thinking" style={{ position: "relative" }}>
          <img
            style={{ position: "absolute", animation: `randomItem${Date.now()} 0.5s`, }}
            height={100}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img width={250} height={250} src="./img/gameOanTuXi/playerComputer.png" alt="play.png" />
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    computer: rootReducer.OanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
