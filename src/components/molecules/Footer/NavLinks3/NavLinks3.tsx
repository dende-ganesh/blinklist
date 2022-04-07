import { Grid } from "@mui/material";
import NavHead from "../../../atoms/Footer/Nav/NavHead/NavHead";
import NavItems from "../../../atoms/Footer/Nav/NavItems/NavItems";
import React from "react";
const list = ["About", "Careers", "partners", "Code of Conduct"];

const NavLinks3 = () => {
  return (
    <Grid
      container
      direction="column"
      rowSpacing="16px"
      columnSpacing="32px"
      data-testid="navlinks3"
    >
      <Grid item>
        <NavHead name="Company" />
      </Grid>
      {list.map((e) => (
        <Grid item key={e}>
          <NavItems name={e} />
        </Grid>
      ))}
    </Grid>
  );
};
export default NavLinks3;
