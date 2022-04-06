import { ComponentStory, ComponentMeta } from "@storybook/react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ExploreMenuItem from "./ExploreMenuItem";

export default {
  title: "molecules/ExploreMenuItem",
  component: ExploreMenuItem,
} as ComponentMeta<typeof ExploreMenuItem>;
export const exploreMenuItem: ComponentStory<typeof ExploreMenuItem> = () => (
  <ExploreMenuItem
    starticon={<RocketLaunchOutlinedIcon />}
    handleChange={() => alert("")}
  >
    Entrepreneurship
  </ExploreMenuItem>
);
