import Headers from "./Headers";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organism/Headers",
  component: Headers,
} as ComponentMeta<typeof Headers>;

export const Header: ComponentStory<typeof Headers> = () => <Headers></Headers>;
