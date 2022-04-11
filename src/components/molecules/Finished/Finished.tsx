import { Button } from "@mui/material";
interface propTypes {
  handleClick: (item: any) => void;
  id: string;
}
export const Finished = (props: propTypes) => (
  <Button
    variant="text"
    sx={{
      width: "100%",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      color: "#0365F2",
    }}
    id={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    Finished
  </Button>
);
