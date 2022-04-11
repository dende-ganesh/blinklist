import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface NavItemType {
  name: string;
}

const NavItem = (props: NavItemType) => {
  return (
    <Typography
      variant="body1"
      sx={{
        width: "214px",
        color: "#6D787E",
        fontWeight: "400",
      }}
    >
      {props.name}
    </Typography>
  );
};

export default NavItem;
