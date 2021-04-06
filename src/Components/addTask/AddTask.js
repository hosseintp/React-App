import React, { Component } from "react";
import { addingTaskTitle } from "../../Redux/ActionCreators";
import { connect } from "react-redux";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from "@material-ui/core/";
import Add from "@material-ui/icons/Add";

class AddTask extends Component {
  state = {
    isOpen: false,
    title: "",
    date: "",
  };

  valueChangeHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  confrimHandler = () => {
    this.props.addingTaskTitle(this.state.title, this.state.date);
    this.setState({ isOpen: false });
    this.setState({ title: "", date: "" });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          className="Button"
          onClick={() => this.setState({ isOpen: true })}
        >
          <Add />
          Add a Task
        </Button>
        <Dialog
          open={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          <DialogContent>
            <DialogContentText>Enter Your Task And Date</DialogContentText>
            <TextField
              id="title"
              label="Title"
              fullWidth
              value={this.state.title}
              onChange={this.valueChangeHandler}
            />
            <TextField
              id="date"
              label="Date"
              fullWidth
              value={this.state.date}
              onChange={this.valueChangeHandler}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ isOpen: false })}
              color="default"
              id="cnl"
            >
              Cancel
            </Button>
            <Button id="conf" onClick={this.confrimHandler}>
              Confrim
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default connect(null, { addingTaskTitle })(AddTask);
