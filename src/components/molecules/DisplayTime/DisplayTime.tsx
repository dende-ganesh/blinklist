import React, { ReactNode } from "react";
import { useStyles } from "../../../theme";
import Timer from "../../atoms/Timer/Timer";
import TimerIcon from "../../atoms/TimerIcon/TimerIcon";
export interface IDisplayTimeProps {
  children: ReactNode;
}

export default function DisplayTime(props: IDisplayTimeProps) {
  const classes = useStyles();
  return (
    <div className={classes.time}>
      <TimerIcon />
      <Timer>{props.children}</Timer>
    </div>
  );
}
