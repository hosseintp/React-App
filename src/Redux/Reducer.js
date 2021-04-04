import { combineReducers } from "redux";
import ActionTypes from "./ActionTypes";

let initialState = {
  tasks: [],
  title: "",
  date: "",
};
const ReducerOne = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { ...state };
    case ActionTypes.SAMPLE_TYPE1:
      return { ...state };
    default:
      return { state };
  }
};
const ReducerTwo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { ...state };
    case ActionTypes.SAMPLE_TYPE1:
      return { ...state };
    default:
      return { state };
  }
};
const Reducer = combineReducers({ ReducerOne, ReducerTwo });
export default Reducer;
