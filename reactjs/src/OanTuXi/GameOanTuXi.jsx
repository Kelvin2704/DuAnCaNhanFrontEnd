import React, { Component } from "react";
import "../assets/OanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";

export default class GameOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi ">
        <div className="row text-center mt-4">
          <div className="col-3">
              <Player/>
          </div>
          <div className="col-6">
              <KetQuaTroChoi/>
              <button className="btn btn-success mt-4 p-2 display-4">Play Game</button>
          </div>
          <div className="col-3">
              <Computer/>
          </div>
        </div>
      </div>
    );
  }
}
