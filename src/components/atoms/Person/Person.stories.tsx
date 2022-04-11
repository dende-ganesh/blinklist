import Person from "./Person";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Person",
  component: Person,
} as ComponentMeta<typeof Person>;

export const person: ComponentStory<typeof Person> = () => <Person></Person>;
