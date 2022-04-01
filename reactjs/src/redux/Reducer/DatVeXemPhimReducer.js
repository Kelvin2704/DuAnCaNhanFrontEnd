import { DAT_GHE, HUY_GHE } from "../type/DatVeXemPhimType";

const stateDefault = {
  danhSachGheDangChon: [],
};

const DatVeXemPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangChonUpdate = [...state.danhSachGheDangChon];
      let index = danhSachGheDangChonUpdate.findIndex((gheDangChon) => gheDangChon.soGhe === action.ghe.soGhe);
      //nếu ghế đang đặt đã có trên redux thì sẽ remove đi
      if (index !== -1) {
        danhSachGheDangChonUpdate.splice(index, 1);
      } else {
        //nếu chưa có thì push vô mảng
        danhSachGheDangChonUpdate.push(action.ghe);
      }
      //cập nhật lại mảng
      state.danhSachGheDangChon = danhSachGheDangChonUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let danhSachGheDangChonUpdate = [...state.danhSachGheDangChon];
      let index = danhSachGheDangChonUpdate.findIndex((gheDangChon) => gheDangChon.soGhe === action.soGhe);
      //nếu ghế đang đặt đã có trên redux thì sẽ remove đi
      if (index !== -1) {
        danhSachGheDangChonUpdate.splice(index, 1);
      }
      state.danhSachGheDangChon = danhSachGheDangChonUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default DatVeXemPhimReducer;
