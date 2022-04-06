import { Grid } from "@mui/material";

import Author from "../../../atoms/Author/Author";
import BookTitle from "../../../atoms/BookTitle/BookTitle";
import DisplayTime from "../../DisplayTime/DisplayTime";
import View from "../../View/View";
import { ReactNode } from "react";
import Box from "@material-ui/core/Box";

export interface IBookCardProps {
  children?: ReactNode;
  image: string;
  title: string;
  author: string;
  time: string;
  reads?: string;
}

export default function BookCard(props: IBookCardProps) {
  return (
    <Grid
      item
      sx={{
        borderRadius: "8px",
        border: "1px solid #E1ECFC",
        overflow: "hidden",
        height: "470px",
      }}
      container
      direction="column"
    >
      <img src={`CoverImages/${props.image}.png`} alt="Book "></img>
      <Box flexGrow={1}>
        <Grid
          item
          container
          direction="column"
          rowSpacing={2}
          sx={{ marginLeft: "15px" }}
        >
          <Grid item>
            <BookTitle>{props.title}</BookTitle>
          </Grid>
          <Grid item>
            <Author>{props.author}</Author>
          </Grid>
          <Grid item container alignItems="center" columnSpacing={4}>
            <Grid item>
              <DisplayTime>{props.time}</DisplayTime>
            </Grid>
            <Grid item>{props.reads && <View>{props.reads}</View>}</Grid>
          </Grid>
        </Grid>
      </Box>
      {`${props.children}` !== "undefined" && (
        <Grid item container>
          {props.children}
        </Grid>
      )}
      <Grid item container sx={{ height: "10px" }}>
        <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
        <Grid item xs={8} sx={{ background: "#F1F6F4" }} />
      </Grid>
    </Grid>
  );
}
