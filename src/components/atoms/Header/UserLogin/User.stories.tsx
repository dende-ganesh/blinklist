import User from "./User";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/User",
  component: User,
} as ComponentMeta<typeof User>;

export const user: ComponentStory<typeof User> = () => <User></User>;
