import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/DatVeXemPhimActions";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssDaDat = "";
      let disabled = false;
      //Trạng thái ghế đã bị đặt
      if (ghe.daDat) {
        cssDaDat = "gheDaDat";
        disabled = true;
      }
      //Xét trạng thái ghế đang đặt
      let cssDangChon = "";

      let indexGheDangChon = this.props.danhSachGheDangChon.findIndex((gheDangChon) => gheDangChon.soGhe === ghe.soGhe);
      if (indexGheDangChon !== -1) {
        cssDangChon = "gheBanChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe ${cssDaDat} ${cssDangChon}`}
          style={{ margin: "1.5px" }}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  render() {
    return (
      <div className="container text-light d-flex align-items-center justify-content-center ml-5" style={{ margin: "3px" }}>
        <div className="row ">
          <div className="col-12">{this.renderGhe()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDangChon: rootReducer.DatVeXemPhimReducer.danhSachGheDangChon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    }, //return về hàm đặt ghế nhận vào ghế mà người dùng click vào
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
