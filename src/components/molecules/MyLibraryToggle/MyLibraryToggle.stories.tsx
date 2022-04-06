import MyLibraryToggle from "./MyLibraryToggle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/MyLibraryToggle",
  component: MyLibraryToggle,
} as ComponentMeta<typeof MyLibraryToggle>;

export const myLibraryToggle: ComponentStory<typeof MyLibraryToggle> = () => {
  return (
    <MyLibraryToggle
      active={""}
      setActive={(activeState) => alert(activeState)}
    ></MyLibraryToggle>
  );
};
