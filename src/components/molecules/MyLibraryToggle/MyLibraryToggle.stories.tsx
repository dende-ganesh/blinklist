import MyLibraryToggle from "./MyLibraryToggle";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Molecules/MyLibraryToggle",
  component: MyLibraryToggle,
} as ComponentMeta<typeof MyLibraryToggle>;

export const myLibraryToggle: ComponentStory<typeof MyLibraryToggle> = () => {
  return (
    <MyLibraryToggle
      active={""}
      setActive={function (activeState: string): void {
        throw new Error("Function not implemented.");
      }}
    ></MyLibraryToggle>
  );
};
