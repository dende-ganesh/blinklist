import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useStyles } from "../../../theme";

export interface IToggleTabsProps {
  active: string;
  setActive: (activeState: string) => void;
}

export default function ToggleTabs(props: IToggleTabsProps) {
  const classes = useStyles();

  return (
    <Grid container columnSpacing={5} sx={{ marginLeft: "10px" }}>
      <Grid
        item
        onClick={() => props.setActive("synopsis")}
        className={
          props.active === "synopsis" ? classes.active : classes.default
        }
      >
        <Typography variant="body1"> Synopsis</Typography>
      </Grid>
      <Grid
        item
        onClick={() => props.setActive("who")}
        className={props.active === "who" ? classes.active : classes.default}
      >
        <Typography variant="body1"> Who is it for</Typography>
      </Grid>
      <Grid
        item
        onClick={() => props.setActive("author")}
        className={props.active === "author" ? classes.active : classes.default}
      >
        <Typography variant="body1"> About the Author</Typography>
      </Grid>
    </Grid>
  );
}
