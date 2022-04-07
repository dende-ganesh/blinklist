import { Button } from "@mui/material";
import React from "react";
interface PropTypes {
  handleClick: (item: any) => void;
  id: string;
}

export const ReadAgain = (props: PropTypes) => (
  <Button
    variant="text"
    sx={{
      width: "100%",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      color: "#0365F2",
    }}
    id={props.id}
    onClick={(e) => {
      e.preventDefault();
      props.handleClick(props.id);
    }}
  >
    Read Again
  </Button>
);
