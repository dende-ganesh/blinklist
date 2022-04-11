import ExploreCard from "./ExploreCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "organism/ExploreCard",
  component: ExploreCard,
} as ComponentMeta<typeof ExploreCard>;

export const exploreCard: ComponentStory<typeof ExploreCard> = () => (
  <ExploreCard handleChange={() => alert()}></ExploreCard>
);
