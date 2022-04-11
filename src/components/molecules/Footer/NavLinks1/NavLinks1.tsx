import { Grid } from "@mui/material";
import React from "react";
import NavHead from "../../../atoms/Footer/Nav/NavHead/NavHead";
import NavItems from "../../../atoms/Footer/Nav/NavItems/NavItems";

const list = [
  "Book lists",
  "What is Nonfiction?",
  "What to read next?",
  "Benefits of reading",
];

const NavLinks1 = () => {
  return (
    <Grid container direction="column" rowSpacing="16px">
      <Grid item>
        <NavHead name="Editorial" />
      </Grid>
      {list.map((e) => (
        <Grid item key={e}>
          <NavItems name={e} />
        </Grid>
      ))}
    </Grid>
  );
};
export default NavLinks1;
