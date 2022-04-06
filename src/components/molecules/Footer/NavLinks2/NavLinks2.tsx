import { Grid } from "@mui/material";
import NavHead from "../../../atoms/Footer/Nav/NavHead/NavHead";
import NavItems from "../../../atoms/Footer/Nav/NavItems/NavItems";

const list = [
  "Pricing",
  "Blinkist business",
  "Gift cards",
  "Blinkist magaine",
  "Contact & help",
];

const NavLinks2 = () => {
  return (
    <Grid container direction="column" rowSpacing="16px" columnSpacing="32px">
      <Grid item>
        <NavHead name="Useful links" />
      </Grid>
      {list.map((e) => (
        <Grid item key={e}>
          <NavItems name={e} />
        </Grid>
      ))}
    </Grid>
  );
};
export default NavLinks2;
