import * as React from "react";
import DefaultLink from "../../atoms/Link/Default/DefaultLink";
import WithIcon from "../../atoms/Link/withIcon/WithIcon";
import Search from "../../atoms/Search/Search";
import UserLoggedIn from "../../molecules/UserLoggedIn/UserLoggedIn";
import { useStyles } from "../../../theme";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExploreCard from "../ExploreCard/ExploreCard";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  clicked: boolean;
  handleChange: () => void;
}

export default function Headers(props: PropTypes) {
  const [clicked, handleClicked] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        sx={{ width: "1500px", height: "86px", marginLeft: "350px" }}
        columnSpacing={10}
        alignItems="center"
      >
        <Grid item>
          <Link to="/">
            <img src="CoverImages/logo.png" alt="blinklist logo" />
          </Link>
        </Grid>
        <Grid item>
          <Search></Search>
        </Grid>
        <Grid item>
          <WithIcon
            clickHandler={() => handleClicked((clicked) => !clicked)}
            clicked={clicked}
          >
            Explore
          </WithIcon>
        </Grid>
        <Grid item>
          <DefaultLink to="/" clickHandler={() => {}}>
            My Library
          </DefaultLink>
        </Grid>
        <Grid item sx={{ marginLeft: "300px" }}>
          <UserLoggedIn></UserLoggedIn>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={clicked ? classes.visible : classes.hidden}
      >
        <ExploreCard handleChange={() => navigate("/explore")} />
      </Grid>
    </Grid>
  );
}
