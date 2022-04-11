import BookDetail from "./BookDetail";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/BookDetail",
  component: BookDetail,
} as ComponentMeta<typeof BookDetail>;

export const bookDetail: ComponentStory<typeof BookDetail> = () => (
  <BookDetail></BookDetail>
);
