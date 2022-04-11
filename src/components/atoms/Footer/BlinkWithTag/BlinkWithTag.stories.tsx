import BlinkWithTag from "./BlinkWithTag";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "atoms/Footer/BlinkWithTag",
  component: BlinkWithTag,
} as ComponentMeta<typeof BlinkWithTag>;

export const blinkWithTag: ComponentStory<typeof BlinkWithTag> = () => (
  <BlinkWithTag></BlinkWithTag>
);
