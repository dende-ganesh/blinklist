import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavHead from "./NavHead";

export default {
  title: "atoms/Footer/Nav/NavHead/NavHead",
  component: NavHead,
} as ComponentMeta<typeof NavHead>;

const Template: ComponentStory<typeof NavHead> = (args) => (
  <NavHead {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: "Nav Head",
};
