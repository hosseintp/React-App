import ActionTypes from "./ActionTypes";

const initialState = {
  tasks: [],
  complist: [],
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
            title: action.payload.title,
            date: action.payload.date,
            complete: false,
          },
        ],
      };
    case ActionTypes.COMPLETED:
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return {
              id: task.id,
              title: task.title,
              date: task.date,
              complete: !task.complete,
            };
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};

export default Reducer;
