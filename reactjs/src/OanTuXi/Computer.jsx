import React, { Component } from "react";
import { connect } from "react-redux";
 class Computer extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="thinking">
          <img height={100} className="mt-3" src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
        </div>
        <div className="speech-bubble"></div>
        <img width={250} height={250} src="./img/gameOanTuXi/playerComputer.png" alt="play.png" />
       
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
    return {
        computer: rootReducer.OanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)