import TimerIcon from "./TimerIcon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/TimerIcon",
  component: TimerIcon,
} as ComponentMeta<typeof TimerIcon>;

export const timerIcon: ComponentStory<typeof TimerIcon> = () => (
  <TimerIcon></TimerIcon>
);
