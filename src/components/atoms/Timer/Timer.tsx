import { Typography } from "@mui/material";
import * as React from "react";
import { ReactNode } from "react";

export interface ITimerProps {
  children: ReactNode;
}

export default function Timer(props: ITimerProps) {
  return (
    <Typography
      variant="caption"
      sx={{ lineHeight: "17.6px", color: "#6D787E" }}
    >
      {props.children}
    </Typography>
  );
}
