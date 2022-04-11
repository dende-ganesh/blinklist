import BookCard from "./DefaultBookCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

export const bookCard: ComponentStory<typeof BookCard> = () => (
  <BookCard
    image="2"
    title="Beyond Entrepreneurship"
    author="Jim Collins & Bill Lazier"
    time="13 minutes read"
    reads="1.9k reads"
  />
);
