import NavLinks1 from "./NavLinks1";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/Footer/NavLinks1",
  component: NavLinks1,
} as ComponentMeta<typeof NavLinks1>;

export const navLinks1: ComponentStory<typeof NavLinks1> = () => (
  <NavLinks1></NavLinks1>
);
