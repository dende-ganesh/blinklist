import Typography from "@mui/material/Typography";
import * as React from "react";
import { ReactNode } from "react";

export interface IAuthorProps {
  children: ReactNode;
}

export default function Author(props: IAuthorProps) {
  return (
    <Typography variant="body1" sx={{ fontWeight: 500, color: "#6D787E" }}>
      {props.children}
    </Typography>
  );
}
