import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="text-warning" style={{ fontSize: "60px" }}>
          {this.props.ketQua}
        </div>
        <div className="text-success" style={{ fontSize: "40px" }}>
          Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="text-success" style={{ fontSize: "40px" }}>
          Tổng số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    ketQua: rootReducer.OanTuXiReducer.ketQua,
    soBanThang: rootReducer.OanTuXiReducer.soBanThang,
    soBanChoi: rootReducer.OanTuXiReducer.soBanChoi,
  };
};
export default connect(mapStateToProps)(KetQuaTroChoi);
