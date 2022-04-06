import ReadingBook from "./ReadingBook";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/ReadingBook",
  component: ReadingBook,
} as ComponentMeta<typeof ReadingBook>;

export const readingBook: ComponentStory<typeof ReadingBook> = () => (
  <ReadingBook
    image="2"
    title="Beyond Entrepreneurship"
    author="Jim Collins & Bill Lazier"
    time="13 minutes read"
    reads="1.9k reads"
  >
    Finished
  </ReadingBook>
);
