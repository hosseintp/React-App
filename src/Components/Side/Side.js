import React from "react";
import { Grid, Avatar, Divider, IconButton } from "@material-ui/core/";
import Person from "@material-ui/icons/Person";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import "./Side.css";
import AddTask from "../addTask/AddTask";
import TaskList from "../TaskList/TaskList";
const useStyles = makeStyles((theme) => ({
  Divider: {
    marginTop: "20px",
  },
  tasks: {
    borderRadius: "15px",
    boxShadow:
      "0 2px 1px rgba(0,0,0,0.09), 1px 4px 2px rgba(0,0,0,0.09), 2px 8px 4px rgba(0,0,0,0.09), 3px 16px 8px rgba(0,0,0,0.09),4px 32px 16px rgba(0,0,0,0.09)",
    padding: "8px",
    overflowY: "scroll",
    height: "350px",
  },
  completed: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow:
      "0 2px 1px rgba(0,0,0,0.09), 1px 4px 2px rgba(0,0,0,0.09), 2px 8px 4px rgba(0,0,0,0.09), 3px 16px 8px rgba(0,0,0,0.09),4px 32px 16px rgba(0,0,0,0.09)",
    borderRadius: "15px",
    alignItems: "center",
    padding: "5px",
    color: "black",
    border: "1px solid black",
    marginTop: "15px",
  },
}));

const Side = (props) => {
  const classes = useStyles();

  return (
    <div style={{ padding: "15px" }}>
      <Grid container spacing={3}>
        <Grid item>
          <Avatar alt="person">
            <Person />
          </Avatar>
        </Grid>
        <Grid item>
          <p>Good Morning</p>
          <h4>Nate!</h4>
        </Grid>
      </Grid>
      <Divider className={classes.Divider} />
      <div className={classes.tasks}>
        <AddTask />
        <TaskList />
      </div>

      <div className={classes.completed}>
        <span>Completed</span>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Side;
