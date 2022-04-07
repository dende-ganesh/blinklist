import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Link from "@mui/material/Link";
import * as React from "react";
export interface IWithIconsProps {
  children: React.ReactNode;
  // varaint: "navLink" | "exploreCardButton" | "libraryCardButton";
  clickHandler: () => void;
  clicked: boolean;
}

export default function WithIcon(props: IWithIconsProps) {
  const { children, clicked, ...rest } = props;
  return (
    <>
      <Link
        {...rest}
        underline="hover"
        variant="body1"
        sx={{ display: "flex", alignItems: "center", color: "#03314B" }}
        onClick={() => {
          props.clickHandler();
        }}
        data-testid="explore"
      >
        {children}
        {props.clicked ? (
          <KeyboardArrowUp data-testid="uparrow"></KeyboardArrowUp>
        ) : (
          <KeyboardArrowDown data-testid="downarrow"></KeyboardArrowDown>
        )}
      </Link>
    </>
  );
}
