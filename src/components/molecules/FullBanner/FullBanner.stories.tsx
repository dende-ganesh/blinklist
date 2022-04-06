import FullBanner from "./FullBanner";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/FullBanner",
  component: FullBanner,
} as ComponentMeta<typeof FullBanner>;

export const fullBanner: ComponentStory<typeof FullBanner> = () => (
  <FullBanner></FullBanner>
);
