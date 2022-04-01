import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/DatVeXemPhimActions";
import { HUY_GHE } from "../redux/type/DatVeXemPhimType";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column align-items-start text-light">
          <div className="pt-2">
            <button className="gheDaDat"></button> <span>Đã đặt</span>
          </div>
          <div className="pt-2">
            <button className="gheBanChon"></button> <span>Ghế bạn chọn</span>
          </div>
          <div className="pt-2">
            <button className="ghe"></button> <span>Ghế chưa đặt</span>
          </div>
        </div>

        <div className="mt-3">
          <table className="myTable">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangChon.map((gheDangChon, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangChon.soGhe}</td>
                    <td>{gheDangChon.gia.toLocaleString()}</td>
                    <td>
                      <button className="btn btn-danger"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangChon.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <h3 className="text-white font-weight-bold text-left mt-2">
              Tạm tính:{" "}
              {this.props.danhSachGheDangChon
                .reduce((tamTinh, gheDangChon, index) => {
                  return (tamTinh += gheDangChon.gia);
                }, 0)
                .toLocaleString()}
            </h3>
          </div>
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

export default connect(mapStateToProps)(ThongTinDatGhe);
