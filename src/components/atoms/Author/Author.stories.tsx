import Author from "./Author";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Author",
  component: Author,
} as ComponentMeta<typeof Author>;

export const author: ComponentStory<typeof Author> = () => (
  <Author>Erica Keswin</Author>
);
