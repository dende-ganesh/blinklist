import React from "react";
import { Grid } from "@mui/material";
import Tagline from "../Tagline/FooterHighlight";

const BlinkWithTag = () => {
  return (
    <Grid
      container
      sx={{
        width: "300px",
        height: "128px",
      }}
      direction="row"
      data-testid="blinkWithTag"
    >
      <Grid item sx={{ height: "26px", width: "124px" }}>
        <img src="./CoverImages/logo.png" alt="Blink logo" />
      </Grid>
      <Grid sx={{ marginTop: "15px" }} item>
        <Tagline />
      </Grid>
    </Grid>
  );
};

export default BlinkWithTag;
