import Typography from "@mui/material/Typography";
import React from "react";

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
