import Grid from "@mui/material/Grid";
import * as React from "react";
import BlinkWithTag from "../../atoms/Footer/BlinkWithTag/BlinkWithTag";
import CopyRight from "../../atoms/Footer/CopyRight/CopyRight";
import NavLinks1 from "../../molecules/Footer/NavLinks1/NavLinks1";
import NavLinks2 from "../../molecules/Footer/NavLinks2/NavLinks2";
import NavLinks3 from "../../molecules/Footer/NavLinks3/NavLinks3";

export default function Footer() {
  return (
    <Grid
      container
      direction="column"
      sx={{
        marginTop: "80px",
        paddingLeft: "10%",
        flexWrap: "wrap",
      }}
    >
      <Grid item sx={{ height: "300px" }}>
        <Grid container columnSpacing={2} justifyContent="center">
          <Grid item xs="auto">
            <BlinkWithTag></BlinkWithTag>
          </Grid>
          <Grid item xs="auto">
            <NavLinks1></NavLinks1>
          </Grid>
          <Grid item xs="auto">
            <NavLinks2></NavLinks2>
          </Grid>
          <Grid item xs={3}>
            <NavLinks3></NavLinks3>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ paddingLeft: "15%" }}>
        <CopyRight></CopyRight>
      </Grid>
    </Grid>
  );
}
