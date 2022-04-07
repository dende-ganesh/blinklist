import { Grid } from "@mui/material";
import ExploreContent from "../../atoms/ExploreContent/ExploreContent";
import ExploreTitle from "../../atoms/ExploreTitle/ExploreTitle";
import React from "react";
const Banner = () => {
  return (
    <Grid container rowSpacing="15px" direction="column" data-testid="banner">
      <Grid item>
        <ExploreTitle />
      </Grid>
      <Grid item>
        <ExploreContent />
      </Grid>
    </Grid>
  );
};

export default Banner;
