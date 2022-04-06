import { ComponentMeta, ComponentStory } from "@storybook/react";
import WithIcon from "./WithIcon";
export default {
  title: "Atoms/Link/WithIcon",
  component: WithIcon,
} as ComponentMeta<typeof WithIcon>;

const template: ComponentStory<typeof WithIcon> = (args) => (
  <WithIcon {...args}></WithIcon>
);
export const Default = template.bind({});
Default.args = {
  children: "My Library",
  clicked: false,
};
