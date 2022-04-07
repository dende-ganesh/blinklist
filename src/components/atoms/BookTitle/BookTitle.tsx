import Typography from "@mui/material/Typography";
import React, { ReactNode } from "react";

export interface IBookTitleProps {
  children: ReactNode;
}

export default function BookTitle(props: IBookTitleProps) {
  return (
    <Typography variant="subtitle2" sx={{ marginTop: "16px" }}>
      {props.children}
    </Typography>
  );
}
