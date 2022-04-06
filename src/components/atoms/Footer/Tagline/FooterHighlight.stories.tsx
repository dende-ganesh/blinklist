import Tagline from "./FooterHighlight";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "atoms/Footer/Tagline",
  component: Tagline,
} as ComponentMeta<typeof Tagline>;

export const tagline: ComponentStory<typeof Tagline> = () => (
  <Tagline></Tagline>
);
