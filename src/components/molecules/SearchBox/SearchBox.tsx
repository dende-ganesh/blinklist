import React from "react";
import { useStyles } from "../../../theme";
import Search from "../../atoms/Search/Search";
export const SearchBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.SearchBox}>
      <Search />
      <input
        type="search"
        placeholder={"Search by title or author"}
        className={classes.Input}
      />
    </div>
  );
};
