import { Grid, Typography } from "@mui/material";
import React from "react";

const ExploreHeader = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          paddingTop: "30px",
          paddingBottom: "24px",
          width: "1000px",
          marginLeft: "450px",
        }}
      >
        <Grid item xs={4}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#116BE9",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Explore by category
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "24px",
              color: "#6D787E",
            }}
          >
            See recently added titles
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1" sx={{ color: "#6D787E" }}>
            See popular titles
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreHeader;
