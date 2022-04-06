import Search from "./Search";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/SearchIcon",
  component: Search,
} as ComponentMeta<typeof Search>;

export const SearchIcon: ComponentStory<typeof Search> = () => (
  <Search></Search>
);
