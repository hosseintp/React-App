import React from "react";
import { connect } from "react-redux";
import { Divider } from "@material-ui/core";
import "./TaskList.css";
import { toggle } from "../../Redux/ActionCreators";

const TaskList = (props) => {
  return (
    <div>
      {props.tasklist && props.tasklist.length ? (
        props.tasklist.map((tasky, index) => {
          return (
            <>
              <div className="card">
                <h4 className="title">{tasky.title}</h4>
                <input
                  type="checkbox"
                  className="check"
                  onChange={() => props.toggleStatus(tasky.id)}
                />
              </div>
              <Divider />
              <div style={{ display: "flex" }}>
                <span className="date">{tasky.date}</span>
                {tasky && tasky.complete ? (
                  <span style={{ color: "green" }}>Done</span>
                ) : null}
              </div>
            </>
          );
        })
      ) : (
        <h2>Nothing To Do</h2>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tasklist: state.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatus: (id) => dispatch(toggle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
