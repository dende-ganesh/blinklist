import { makeStyles } from "@material-ui/core";
import { createTheme, responsiveFontSizes } from "@mui/material/";
import { findByLabelText } from "@testing-library/react";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption1: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    caption?: React.CSSProperties;
  }
}

// // Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    subtitle1: true;
    subtitle2: true;
    body1: true;
    body2: true;
    caption: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
      light: "#E2F2E9",
      dark: "#22C870",
    },
    secondary: {
      main: "#116BE9",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    heading: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "700",
    },
    subtitle1: {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "32px",
    },
    subtitle2: {
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "24px",
    },
    body1: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontWeight: "400",
      fontSize: "22px",
      lineHeight: "26px",
    },
    caption: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
});
export default theme;

const useStyles = makeStyles({
  userlogin: {
    display: "flex",
    alignItems: "center",
  },
  header: {
    width: "1000px",
    margin: "0 auto",
    display: "flex",
    columnGap: "30%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    display: "flex",
    columnGap: "30px",
    alignItems: "center",
  },
  headerRight: {
    float: "right",
  },
  myLibrary: {
    margin: "50px",
    marginLeft: "10%",
  },
  time: {
    display: "flex",
    alignItems: "flex-end",
    columnGap: "6px",
  },
  bookInfo: {
    marginLeft: "30px",
  },
  exploreItem: {
    textDecoration: "none",
    color: "#6D787E",
    textTransform: "none",
    "&:hover": {
      color: "#0365F2",
    },
  },
  bannerBox: {
    backgroundColor: "#F1F6F4",
    marginLeft: "100px",
    marginTop: "32px",
  },
  bannerCard: {
    border: "none",
    boxShadow: "none",
    height: "230px",
    width: "250px",
    backgroundColor: "#F1F6F4",
  },
  SearchBox: {
    width: "912px",
    marginTop: "50px",
    marginLeft: "100px",
    display: "flex",
    alignItems: "center",
    border: "none",
    borderBottom: "2px solid #6D787E",
    columnGap: "10px",
    paddingBottom: "10px",
  },
  Input: {
    paddingLeft: "10px",
    border: "none",
    width: "100%",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    color: "#6D787E",
  },
  AddLibrary: {
    width: "100%",
    textTransform: "none",
    color: "#0365F2",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20.11px",
    "&:hover": {
      color: "white",
      backgroundColor: "#0365F2",
    },
  },
  libraryDefault: {
    width: "304px",

    color: "#6D787E",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "23px",
    textDecoration: "none",
    borderBottom: "2px solid #E1ECFC",
    cursor: "pointer",
  },
  libraryActive: {
    width: "304px",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "23px",
    textDecoration: "none",
    color: "#2CE080",
    borderBottom: "2px solid #2CE080",
    cursor: "pointer",
  },
  default: {
    textAlign: "left",
    width: "200px",
    borderBottom: "2px solid #E1ECFC",
    cursor: "pointer",
  },
  active: {
    textAlign: "left",
    width: "200px",
    borderBottom: "2px solid #2CE080",
    cursor: "pointer",
  },
  visible: {
    position: "absolute",
    height: "398px",
    top: "100px",
    background: "#F1F6F4",
  },
  hidden: {
    display: "none",
  },
});
export { useStyles };
