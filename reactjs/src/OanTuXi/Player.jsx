import React, { Component } from "react";
//tại nơi nào theo dõi state thì import connect
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="thinking">
          <img className="mt-3" height={75} src={this.props.mangChon.find((item) => item.banChon === true).hinhAnh} alt="" />
        </div>
        <div className="speech-bubble"></div>
        <img width={250} height={250} src="./img/gameOanTuXi/player.png" alt="play.png" />

        <div className="row">
          {this.props.mangChon.map((item, index) => {
            // thêm viền cho item được chọn
            let border = {};
            if (item.banChon) {
              border = { border: "5px solid orange" };
            }

            return (
              <div className="col-4" key={index}>
                <button style={border} className="btnChon" onClick={() => {
                    this.props.banChon(item.ma)
                }}>
                  <img height={60} src={item.hinhAnh} alt={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    mangChon: rootReducer.OanTuXiReducer.mangChon,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    banChon: (maChon) => {
      dispatch({
        type: "BAN_CHON",
        maChon,
      });
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Player);
// const mapStateToProps = state => {
//     return {
//         mangChon : state.OanTuXiReducer.mangChon
//     }
// }

// export default connect(mapStateToProps)(Player);
