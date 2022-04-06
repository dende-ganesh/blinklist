import BookGrid from "./BookGrid";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { books } from "../../db";
import { Finished } from "../../molecules/Finished/Finished";

export default {
  title: "Organism/BookGrid",
  component: BookGrid,
} as ComponentMeta<typeof BookGrid>;

export const bookGrid: ComponentStory<typeof BookGrid> = () => (
  <BookGrid
    bookList={books}
    btn={<Finished id="" handleClick={(e) => alert(e)} />}
  ></BookGrid>
);
