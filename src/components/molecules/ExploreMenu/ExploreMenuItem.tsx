import { Link, Button } from "@mui/material";
import { ReactNode } from "react";
import { useStyles } from "../../../theme";

export interface IExploreMenuItemProps {
  starticon: ReactNode;
  children: ReactNode;
  handleChange: () => void;
}

export default function ExploreMenuItem(props: IExploreMenuItemProps) {
  const classes = useStyles();
  return (
    <Link underline="none">
      <Button
        onClick={() => {
          props.handleChange();
        }}
        variant="text"
        startIcon={props.starticon}
        className={classes.exploreItem}
      >
        {props.children}
      </Button>
    </Link>
  );
}
