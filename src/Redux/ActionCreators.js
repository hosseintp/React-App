import ActionTypes from "./ActionTypes";

const addingTask = () => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: {},
  };
};
const sample1 = () => {
  return {
    type: ActionTypes.SAMPLE_TYPE1,
    payload: {},
  };
};
const sample2 = () => {
  return {
    type: ActionTypes.SAMPLE_TYPE2,
    payload: {},
  };
};
export default { addingTask, sample1, sample2 };
