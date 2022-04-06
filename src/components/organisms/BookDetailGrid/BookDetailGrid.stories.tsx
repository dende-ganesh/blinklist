import BookDetailGrid from "./BookDetailGrid";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organism/BookDetailGrid",
  component: BookDetailGrid,
} as ComponentMeta<typeof BookDetailGrid>;

export const bookDetailGrid: ComponentStory<typeof BookDetailGrid> = () => (
  <BookDetailGrid></BookDetailGrid>
);
