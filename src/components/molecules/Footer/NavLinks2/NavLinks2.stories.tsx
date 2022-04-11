import NavLinks2 from "./NavLinks2";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/Footer/NavLinks2",
  component: NavLinks2,
} as ComponentMeta<typeof NavLinks2>;

export const navLinks2: ComponentStory<typeof NavLinks2> = () => (
  <NavLinks2></NavLinks2>
);
