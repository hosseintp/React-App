import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  subdate: {
    position: "absolute",
    top: "25%",
    left: "30px",
  },
  FormControlLabel: {
    color: "black",
    position: "relative",
  },
}));

const Tasks = () => {
  const [value, setValue] = React.useState("female");
  const classes = useStyles();

  const tasks = [
    { title: "Meet Jonh", date: "Today" },
    { title: "Buy a Book", date: "Sat" },
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {tasks.map((task, index) => {
          return (
            <>
              <FormControlLabel
                key={index + 1}
                value={task.title}
                control={<Radio />}
                label={task.title}
                date={task.date}
                className={classes.FormControlLabel}
              />
              <span>{task.date}</span>
            </>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
export default Tasks;
