import ExploreContent from "./ExploreContent";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Atoms/ExploreContent",
  component: ExploreContent,
} as ComponentMeta<typeof ExploreContent>;

export const exploreContent: ComponentStory<typeof ExploreContent> = () => (
  <ExploreContent></ExploreContent>
);
