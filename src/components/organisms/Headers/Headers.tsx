import DefaultLink from "../../atoms/Link/Default/DefaultLink";
import WithIcon from "../../atoms/Link/withIcon/WithIcon";
import Search from "../../atoms/Search/Search";
import UserLoggedIn from "../../molecules/UserLoggedIn/UserLoggedIn";
import { useStyles } from "../../../theme";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ExploreCard from "../ExploreCard/ExploreCard";

export default function Headers() {
  const [clicked, handleClicked] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const [logClick, handleLogin] = useState(true);
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        sx={{ width: "1500px", height: "86px", marginLeft: "350px" }}
        columnSpacing={10}
        alignItems="center"
        data-testid="header"
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
            clickHandler={() => handleClicked(!clicked)}
            clicked={clicked}
          >
            Explore
          </WithIcon>
        </Grid>
        <Grid item>
          <DefaultLink to="/" clickHandler={() => alert("")}>
            My Library
          </DefaultLink>
        </Grid>
        <Grid item sx={{ marginLeft: "300px" }}>
          <UserLoggedIn
            logClick={logClick}
            handleLogin={() => handleLogin(!logClick)}
          ></UserLoggedIn>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={clicked ? classes.visible : classes.hidden}
        data-testid="exploreCardHidden"
      >
        <ExploreCard handleChange={() => navigate("/explore")} />
      </Grid>
    </Grid>
  );
}
