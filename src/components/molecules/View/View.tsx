import { ReactNode } from "react";
import { useStyles } from "../../../theme";
import Person from "../../atoms/Person/Person";
import Timer from "../../atoms/Timer/Timer";

export interface IViewProps {
  children: ReactNode;
}

export default function View(props: IViewProps) {
  const classes = useStyles();
  return (
    <div className={classes.time}>
      <Person />
      <Timer>{props.children}</Timer>
    </div>
  );
}
