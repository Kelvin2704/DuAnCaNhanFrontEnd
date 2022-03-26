import React, { Component } from "react";
import "../assets/OanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import { connect } from "react-redux";

class GameOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi ">
        <div className="row text-center mt-4">
          <div className="col-3">
            <Player />
          </div>
          <div className="col-6">
            <KetQuaTroChoi />
            <button
              className="btn btn-success mt-4 p-2 display-4"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      //Khai báo hàm lặp đi lặp lại setInterval()
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 15) { //lớn hơn 10 thì dừng hàm interval
          clearInterval(randomComputerItem); 
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameOanTuXi);
