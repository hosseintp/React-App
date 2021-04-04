import React from "react";
import "./Content.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Search, NavigateBefore, NavigateNext } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import Auxillary from "../../../HOC/Auxillary";
import Calender from "../../Calender/Calender";

const Content = (props) => {
  return (
    <Auxillary>
      <div className="container">
        <Grid
          container
          justify="space-between"
          alignItems="center"
          alignContent="center"
        >
          <Grid item>
            <Typography variant="h5" color="initial">
              November 2019
            </Typography>
          </Grid>
          <Grid item>
            <Grid item>
              <Typography variant="body1" color="initial">
                Today
              </Typography>
              <Typography variant="caption" color="initial">
                Mon,18
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              className="search"
              placeholder="search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignContent="center"
          className="between"
        >
          <Grid item>
            <IconButton>
              <NavigateBefore />
            </IconButton>

            <Button>Day</Button>
            <Button>Week</Button>
            <Button>Month</Button>

            <IconButton>
              <NavigateNext />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className="days">
          <Grid item xs="auto">
            Sun
          </Grid>
          <Grid item xs="auto">
            Mon
          </Grid>
          <Grid item xs="auto">
            Tue
          </Grid>
          <Grid item xs="auto">
            Wed
          </Grid>
          <Grid item xs="auto">
            Thu
          </Grid>
          <Grid item xs="auto">
            Fri
          </Grid>
          <Grid item xs="auto">
            Sat
          </Grid>
        </Grid>
      </div>
      <div>
        <Calender />
      </div>
    </Auxillary>
  );
};

export default Content;
