import BookTitle from "./BookTitle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/BookTitle",
  component: BookTitle,
} as ComponentMeta<typeof BookTitle>;

export const bookTitle: ComponentStory<typeof BookTitle> = () => (
  <BookTitle>Bring Your Human to Work</BookTitle>
);
