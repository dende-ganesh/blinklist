import Timer from "./Timer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Timer",
  component: Timer,
} as ComponentMeta<typeof Timer>;

export const timer: ComponentStory<typeof Timer> = () => (
  <Timer>12-minute read</Timer>
);
