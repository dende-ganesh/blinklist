import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavItems from "./NavItems";

export default {
  title: "atoms/Footer/Nav/NavItems/NavItems",
  component: NavItems,
} as ComponentMeta<typeof NavItems>;

const Template: ComponentStory<typeof NavItems> = (args) => (
  <NavItems {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: "Nav Item",
};
