import Grid from "@mui/material/Grid";
import * as React from "react";
import { ReactNode } from "react";

export interface ITemplateProps {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export default function Template(props: ITemplateProps) {
  return (
    <Grid
      container
      columnSpacing={6}
      justifyContent="center"
      data-testid="template"
    >
      <Grid item xs={12}>
        {props.header}
      </Grid>
      <Grid item xs={8}>
        {props.content}
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "40px ", background: "#F1F6F4" }}>
        {props.footer}
      </Grid>
    </Grid>
  );
}
