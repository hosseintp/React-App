import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Avatar,
  Divider,
  IconButton,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle,
} from "@material-ui/core/";
import Person from "@material-ui/icons/Person";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import Add from "@material-ui/icons/Add";
import Tasks from "../Tasks";

import "./Side.css";

const useStyles = makeStyles((theme) => ({
  Button: {
    boxShadow:
      "0 2px 1px rgba(0,0,0,0.09), 1px 4px 2px rgba(0,0,0,0.09), 2px 8px 4px rgba(0,0,0,0.09), 3px 16px 8px rgba(0,0,0,0.09),4px 32px 16px rgba(0,0,0,0.09)",
    margin: "15px",
    color: "black",
  },
  Divider: {
    marginTop: "20px",
  },
  tasks: {
    borderRadius: "15px",
    boxShadow:
      "0 2px 1px rgba(0,0,0,0.09), 1px 4px 2px rgba(0,0,0,0.09), 2px 8px 4px rgba(0,0,0,0.09), 3px 16px 8px rgba(0,0,0,0.09),4px 32px 16px rgba(0,0,0,0.09)",
    padding: "8px",
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
  const [open, setOpen] = useState(false);
  const entrDataHandler = () => {
    setOpen(false);
  };
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
        <Button
          variant="contained"
          className={classes.Button}
          onClick={() => setOpen(true)}
        >
          <Add />
          Add a Task
        </Button>
        <Tasks />
      </div>

      <div className={classes.completed}>
        <span>Completed</span>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle id=""></DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Your Task And Date</DialogContentText>
          <TextField
            id="title"
            label="Title"
            fullWidth
            // value={}
            // onChange={}
          />
          <TextField
            id="date"
            label="Date"
            fullWidth
            // value={}
            // onChange={}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="default" id="cnl">
            Cancel
          </Button>
          <Button onClick={entrDataHandler} id="conf">
            Confrim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Side;
