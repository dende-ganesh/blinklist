import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useStyles } from "../../../theme";
import User from "../../atoms/Header/UserLogin/User";
import React from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
interface PropTypes {
  logClick: boolean;
  handleLogin: () => void;
}
export default function UserLoggedIn(props: PropTypes) {
  const { logout } = useAuth0();
  const classes = useStyles();
  return (
    <div
      className={classes.userlogin}
      data-testid="userLoggedIn"
      onClick={() => props.handleLogin()}
    >
      <User></User>
      {props.logClick ? (
        <KeyboardArrowDown />
      ) : (
        <>
          <KeyboardArrowUp />
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "80px",
              right: "26%",
              background: "white",
            }}
            onClick={() => {
              props.handleLogin();
              logout({ returnTo: window.location.origin });
            }}
          >
            LogOut
          </Button>
        </>
      )}
    </div>
  );
}
