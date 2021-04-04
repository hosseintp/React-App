import React from "react";
import Auxillary from "../../HOC/Auxillary";
import Frame from "./Frame/Frame";
// import { makeStyles } from "@material-ui/styles";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: "black",
//   },
// }));
const Layout = (props) => {
  // const classes = useStyles();
  return (
    <Auxillary>
      <Frame />
    </Auxillary>
  );
};

export default Layout;
