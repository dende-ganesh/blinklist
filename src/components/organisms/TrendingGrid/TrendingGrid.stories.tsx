import TrendingGrid from "./TrendingGrid";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { books } from "../../db";

export default {
  title: "Organism/TrendingGrid",
  component: TrendingGrid,
} as ComponentMeta<typeof TrendingGrid>;

export const trendingGrid: ComponentStory<typeof TrendingGrid> = () => (
  <TrendingGrid />
);
