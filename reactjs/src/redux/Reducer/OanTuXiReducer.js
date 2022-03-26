const stateGameDefault = {
  mangChon: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", banChon: false }, //0
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", banChon: true }, //1
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", banChon: false }, //2
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

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3); //lấy ra con số ngẫu nhiên 0,1,2
      let itemNgauNhien = state.mangChon[soNgauNhien]; // gán itemNgauNhien = với soNgauNhien của state
      // console.log("soNgauNhien_itemNgauNhien", soNgauNhien, itemNgauNhien);
      state.computer = itemNgauNhien; //
      // console.log("random", action);
      return { ...state };
    }
    case "GAME_RULE": {
      let player = state.mangChon.find((item) => item.banChon === true);
      let computer = state.computer;
      //xét game rule
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa rồi, chơi lại nha";
          } else if (computer.ma === "bua") {
            state.ketQua = "Aishh, chết tiệt thua rồi";
          } else {
            state.ketQua = "Hehe, thắng rồi nha, liu liu";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (computer.ma === "keo") {
            state.ketQua = "Hehe, thắng rồi nha, liu liu";
            state.soBanThang += 1;
          } else if (computer.ma === "bua") {
            state.ketQua = "Hòa rồi, chơi lại nha";
          } else {
            state.ketQua = "Aishh, chết tiệt thua rồi";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Aishh, chết tiệt thua rồi";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hehe, thắng rồi nha, liu liu";
            state.soBanThang += 1;
          } else {
            state.ketQua = "Hòa rồi, chơi lại nha";
          }
          break;
        default:
          state.ketQua = "I Love U 3000 !!!";
          return { ...state };
      }
      state.soBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default OanTuXiReducer;
