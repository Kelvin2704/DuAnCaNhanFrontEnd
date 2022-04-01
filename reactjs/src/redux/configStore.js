import { combineReducers, createStore } from "redux";
import OanTuXiReducer from "./Reducer/OanTuXiReducer";
import DatVeXemPhimReducer from "./Reducer/DatVeXemPhimReducer";

const rootReducer = combineReducers({
  //state OanTuXi
  OanTuXiReducer: OanTuXiReducer,
  DatVeXemPhimReducer: DatVeXemPhimReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
