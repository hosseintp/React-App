import ActionTypes from "./ActionTypes";
let initialId = 0;
export const addingTaskTitle = (content, time) => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: {
      id: ++initialId,
      title: content,
      date: time,
    },
  };
};
// export const completed = (id) => {
//   return {
//     type: ActionTypes.COMPLETED,
//     payload: {
//       id,
//     },
//   };
// };
