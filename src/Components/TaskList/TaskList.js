import React from "react";
import { connect } from "react-redux";

const TaskList = (props) => {
  return <div></div>;
};
const mapStateToProps = (state) => {
  return {
    tasklist: state.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {};

export default connect()(TaskList);
