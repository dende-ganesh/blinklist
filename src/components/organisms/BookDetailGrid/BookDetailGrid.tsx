import { Grid, Typography } from "@mui/material";
import * as React from "react";
import BookDetail from "../../molecules/BookDetail/BookDetail";
import ToggleTabs from "../../molecules/ToggleTabs/ToggleTabs";

export default function BookDetailGrid() {
  const [active, setActive] = React.useState("synopsis");
  const toggleTabs: {
    synopsis: string;
    who: string;
    author: string;
  } = {
    synopsis:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    who: "Readers",
    author: "By Jim Collins and Bill Lazier",
  };
  return (
    <Grid
      container
      direction="column"
      spacing={4}
      sx={{ marginTop: "50px", marginLeft: "100px" }}
    >
      <Grid item>
        <Typography variant="body2">Get the key ideas from</Typography>
      </Grid>
      <Grid item>
        <BookDetail></BookDetail>
      </Grid>
      <Grid item>
        <ToggleTabs
          active={active}
          setActive={(act) => setActive(act)}
        ></ToggleTabs>
      </Grid>
      <Grid item sx={{ width: "75%" }}>
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          {active === "synopsis"
            ? toggleTabs.synopsis
            : active === "who"
            ? toggleTabs.who
            : toggleTabs.author}
        </Typography>
      </Grid>
    </Grid>
  );
}
