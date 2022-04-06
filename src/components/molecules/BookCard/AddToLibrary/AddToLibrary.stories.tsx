import AddToLibrary from "./AddToLibrary";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/AddToLibrary",
  component: AddToLibrary,
} as ComponentMeta<typeof AddToLibrary>;

export const addToLibrary: ComponentStory<typeof AddToLibrary> = () => (
  <AddToLibrary handleClick={() => alert()}></AddToLibrary>
);
