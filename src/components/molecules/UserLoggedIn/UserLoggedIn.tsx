import { KeyboardArrowDown } from "@mui/icons-material";
import { useStyles } from "../../../theme";
import User from "../../atoms/Header/UserLogin/User";
import React from "react";
export default function UserLoggedIn() {
  const classes = useStyles();
  return (
    <div className={classes.userlogin} data-testid="userLoggedIn">
      <User></User>
      <KeyboardArrowDown />
    </div>
  );
}
