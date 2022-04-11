import { Grid } from "@mui/material";
import React from "react";
import ExploreContent from "../../atoms/ExploreContent/ExploreContent";
import ExploreTitle from "../../atoms/ExploreTitle/ExploreTitle";
const BannerOneTwo = () => {
  return (
    <Grid container rowSpacing="15px" direction="column">
      <Grid item>
        <ExploreTitle />
      </Grid>
      <Grid item>
        <ExploreContent />
      </Grid>
    </Grid>
  );
};

export default BannerOneTwo;
