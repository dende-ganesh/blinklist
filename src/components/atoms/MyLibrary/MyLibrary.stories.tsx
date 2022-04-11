import MyLibrary from "./MyLibrary";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/MyLibrary",
  component: MyLibrary,
} as ComponentMeta<typeof MyLibrary>;

export const Mylibrary: ComponentStory<typeof MyLibrary> = () => (
  <MyLibrary>My Library</MyLibrary>
);
