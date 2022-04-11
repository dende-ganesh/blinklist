import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import * as React from "react";
import { useStyles } from "../../../theme";
import { useNavigate, useLocation, Link } from "react-router-dom";

export interface IMyLibraryToggleProps {
  active: string;
  setActive: (activeState: string) => void;
}

export default function MyLibraryToggle(props: IMyLibraryToggleProps) {
  const classes = useStyles();
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <Grid
      container
      // columnSpacing={5}
      sx={{
        marginLeft: "120px",
        marginBottom: "30px",
      }}
    >
      <Grid
        item
        onClick={() => {
          props.setActive("currentlyreading");
          navigation("/currentlyreading");
        }}
        className={
          (props.active === "currentlyreading" &&
            location.pathname === "/currentlyreading") ||
          location.pathname === "/"
            ? classes.libraryActive
            : classes.libraryDefault
        }
      >
        <Typography variant="body1"> Currently reading</Typography>
      </Grid>
      <Grid
        item
        onClick={() => {
          props.setActive("finished");
          navigation("/finishedreading");
        }}
        className={
          props.active === "finished" &&
          location.pathname === "/finishedreading"
            ? classes.libraryActive
            : classes.libraryDefault
        }
      >
        <Typography variant="body1"> Finished</Typography>
      </Grid>
    </Grid>
  );
}
