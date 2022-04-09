import { Grid, Divider, Box } from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ExploreHeader from "../../molecules/ExploreHeader/ExploreHeader";
import ExploreMenuItem from "../../molecules/ExploreMenu/ExploreMenuItem";
import React from "react";
const itemList = [
  { name: "Entrepreneurship", icon: <RocketLaunchOutlinedIcon /> },
  { name: "Science", icon: <ScienceOutlinedIcon /> },
  { name: "Economics", icon: <FiberSmartRecordOutlinedIcon /> },
  { name: "Corporate Culture", icon: <BusinessCenterOutlinedIcon /> },
  { name: "Psychology", icon: <PsychologyOutlinedIcon /> },
  { name: "Nature & Environment", icon: <YardOutlinedIcon /> },
  { name: "Politics", icon: <AccountBalanceOutlinedIcon /> },
  { name: "Health & Nutrition", icon: <LocalHospitalOutlinedIcon /> },
  { name: "History", icon: <PublicOutlinedIcon /> },
  { name: "Motivation & Inspiration", icon: <TipsAndUpdatesOutlinedIcon /> },
  { name: "Productivity", icon: <HourglassBottomOutlinedIcon /> },
  { name: "Career & Success", icon: <ModeStandbyOutlinedIcon /> },
  { name: "Marketing & Sales", icon: <AutoGraphOutlinedIcon /> },
  { name: "Personal Development", icon: <SignalCellularAltOutlinedIcon /> },
  { name: "Communication Skills", icon: <CommentOutlinedIcon /> },
  { name: "Money & Investments", icon: <AccountBalanceWalletOutlinedIcon /> },
  { name: "Sex & Relationship", icon: <FavoriteBorderOutlinedIcon /> },
  { name: "Education", icon: <SchoolOutlinedIcon /> },
];

interface PageChange {
  handleChange: () => void;
}

const ExploreCard = (props: PageChange) => {
  const items = itemList.map((e) => (
    <ExploreMenuItem
      key={e.name}
      handleChange={props.handleChange}
      starticon={e.icon}
    >
      {e.name}
    </ExploreMenuItem>
  ));

  return (
    <Box zIndex="1">
      <ExploreHeader />
      <Divider sx={{ width: "850px", marginLeft: "454px", color: "#042330" }} />
      <Grid
        container
        sx={{
          paddingTop: "30px",
          paddingBottom: "24px",
          width: "1000px",
          marginLeft: "450px",
        }}
        data-testid="exploreMenu"
      >
        {items.map((e) => (
          <Grid item xs={4}>
            {e}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExploreCard;
