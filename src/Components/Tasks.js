import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  FormControlLabel: {
    color: "black",
  },
}));

const Tasks = () => {
  const [value, setValue] = React.useState("female");
  const classes = useStyles();

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
        <FormControlLabel
          value="wireframe"
          control={<Radio />}
          label="wireframe for contact page"
          className={classes.FormControlLabel}
        />
        <FormControlLabel
          value="Book"
          control={<Radio />}
          label="Book Return Ticket"
          className={classes.FormControlLabel}
        />
        <FormControlLabel
          value="Gift"
          control={<Radio />}
          label="Buy anniversary Gift"
          className={classes.FormControlLabel}
        />
        <FormControlLabel
          value="Pay"
          control={<Radio />}
          label="Pay Electricity Bill"
          className={classes.FormControlLabel}
        />
        <FormControlLabel
          value="Meet"
          control={<Radio />}
          label="Meet Chris in the Confrence"
          className={classes.FormControlLabel}
        />
      </RadioGroup>
    </FormControl>
  );
};
export default Tasks;
