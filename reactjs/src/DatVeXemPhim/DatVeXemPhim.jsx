import React, { Component } from "react";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import "../assets/BaiTapBookingTicket.css";
import danhSachGhe from "../Data/danhSachGhe.json";

export default class DatVeXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div className="" key={index}>
          <HangGhe hangGhe={hangGhe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="" style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url(./img/DatVePhim/bgmovie.jpg)", backgroundSize: "100%" }}>
        <div style={{ position: "fixed", backgroundColor: "rgba(0,0,0,.8)", width: "100%", height: "100%" }}></div>
        <div className="container-fluid">
          <div className="row text-light mt-1">
            <div className="col-12">
              <h2>ĐẶT VÉ XEM PHIM</h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-8">
              <div className=" d-flex flex-column align-items-center" style={{marginBottom:'120px'}}>
                <div className="screen"></div>
                <p className="text-light">Màn Hình</p>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
