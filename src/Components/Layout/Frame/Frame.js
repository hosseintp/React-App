import React from "react";
import { makeStyles } from "@material-ui/core";
import "./Frame.css";
import Side from "../../Side/Side";
import Content from "../Content/Content";
const shadow =
  "0 2px 1px rgba(0,0,0,0.09), 1px 4px 2px rgba(0,0,0,0.09), 2px 8px 4px rgba(0,0,0,0.09), 3px 16px 8px rgba(0,0,0,0.09),4px 32px 16px rgba(0,0,0,0.09)";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "95%",
    boxShadow: shadow,
    textAlign: "center",
    margin: "auto",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    border: "3px solid gray",
    borderRadius: "50px",
    display: "flex",
    overflow: "hidden",
  },
}));
const Frame = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="side">
        <Side />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
};

export default Frame;
