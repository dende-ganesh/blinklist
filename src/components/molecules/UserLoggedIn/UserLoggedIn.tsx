import { KeyboardArrowDown } from "@mui/icons-material";
import { useStyles } from "../../../theme";
import User from "../../atoms/Header/UserLogin/User";

export interface IUserLoggedInProps {}

export default function UserLoggedIn(props: IUserLoggedInProps) {
  const classes = useStyles();
  return (
    <div className={classes.userlogin}>
      <User></User>
      <KeyboardArrowDown />
    </div>
  );
}
