import { Card, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../../../theme";
import Banner from "../Banner/Banner";

const FullBanner = () => {
  const classes = useStyles();
  return (
    <Box width="fit-content" height="264px" className={classes.bannerBox}>
      <Grid container columnSpacing="112px">
        <Grid item sx={{ marginTop: "45px", marginLeft: "40px" }}>
          <Banner />
        </Grid>
        <Grid item>
          <Card className={classes.bannerCard}>
            <CardMedia
              component="img"
              image="/CoverImages/person.png"
            ></CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FullBanner;
