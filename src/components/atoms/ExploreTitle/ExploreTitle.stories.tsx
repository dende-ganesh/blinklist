import ExploreTitle from "./ExploreTitle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/ExploreTitle",
  component: ExploreTitle,
} as ComponentMeta<typeof ExploreTitle>;

export const exploreTitle: ComponentStory<typeof ExploreTitle> = () => (
  <ExploreTitle></ExploreTitle>
);
