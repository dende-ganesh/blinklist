import ExploreHeader from "./ExploreHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/ExploreHeader",
  component: ExploreHeader,
} as ComponentMeta<typeof ExploreHeader>;

export const exploreHeader: ComponentStory<typeof ExploreHeader> = () => (
  <ExploreHeader></ExploreHeader>
);
