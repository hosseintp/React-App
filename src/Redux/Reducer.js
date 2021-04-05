import ActionTypes from "./ActionTypes";

const initialState = {
  tasks: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.payload.id,
            title: action.payload.content,
            date: action.payload.time,
            complete: false,
          },
        ],
      };
    case ActionTypes.COMPLETED:
      return { ...state };
    default:
      return state;
  }
};

export default Reducer;
