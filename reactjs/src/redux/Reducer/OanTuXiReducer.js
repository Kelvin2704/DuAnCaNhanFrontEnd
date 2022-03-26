const stateGameDefault = {
  mangChon: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", banChon: false },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", banChon: true },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", banChon: false },
  ],
  ketQua: "I Love U 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: "./img/gameOanTuXi/keo.png",
  },
};

const OanTuXiReducer = (state = stateGameDefault, action) => {
  switch (action.type) {
    case "BAN_CHON": {
      let mangChonUpdate = [...state.mangChon]; //clone ra mảng update mới
      //chạy hàm map để xét lại cho tất cả giá trị banChon trong mảng thành false
      //có nghĩa là chạy hàm map để tạo lại mảng mới, nếu ma trong mangChon = maChon trong action thì sẽ trả về mangChonUpdate mới và đổi key banChon thành true
      mangChonUpdate = mangChonUpdate.map((item, index) => {
        if (item.ma === action.maChon) {
          return { ...item, banChon: true };
        }
        return { ...item, banChon: false };
      });

      //Cách 2:
      //tìm ra index của mã bạn click để đổi trạng thái bạn chọn ứng với mã chọn đó
      //   let index = mangChonUpdate.findIndex((nutChon) => nutChon.ma === action.maChon);
      //   if (index !== -1) {
      //     mangChonUpdate[index].banChon = true;
      //   }
      //setState lại
      state.mangChon = mangChonUpdate;
      console.log(action);

      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default OanTuXiReducer;
