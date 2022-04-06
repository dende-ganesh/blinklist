import Button from "@mui/material/Button";
import { useStyles } from "../../../../theme";

export interface IAddToLibraryProps {
  handleClick: () => void;
}

export default function AddToLibrary(props: IAddToLibraryProps) {
  const classes = useStyles();
  return (
    <Button
      variant="text"
      className={classes.AddLibrary}
      onClick={() => props.handleClick()}
    >
      {"+ Add to Library "}
    </Button>
  );
}
