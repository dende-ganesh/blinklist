import { SearchBox } from "./SearchBox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/SearchBox",
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

export const searchBox: ComponentStory<typeof SearchBox> = () => (
  <SearchBox></SearchBox>
);
