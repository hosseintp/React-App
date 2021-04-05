import { createStore } from "redux";
import Reducer from "./Reducer";

const Store = createStore(() => ({
  tasks: [
    { title: "Meet Jonh", date: "Today" },
    { title: "Buy a Book", date: "Sat" },
  ],
}));

export default Store;
