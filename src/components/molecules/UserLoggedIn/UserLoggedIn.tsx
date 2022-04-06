import { KeyboardArrowDown } from "@mui/icons-material";
import { useStyles } from "../../../theme";
import User from "../../atoms/Header/UserLogin/User";

export default function UserLoggedIn() {
  const classes = useStyles();
  return (
    <div className={classes.userlogin}>
      <User></User>
      <KeyboardArrowDown />
    </div>
  );
}
