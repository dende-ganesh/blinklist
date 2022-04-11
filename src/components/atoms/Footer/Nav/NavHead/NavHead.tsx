import React from "react";
import Typography from "@mui/material/Typography";

interface NavHeadType {
  name: string;
}

const NavHead = (props: NavHeadType) => {
  return (
    <>
      <Typography variant="body1" sx={{ color: "#03314B" }}>
        {props.name}
      </Typography>
    </>
  );
};

export default NavHead;
