import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserLoggedIn from "./UserLoggedIn";

export default {
  title: "Molecules/UserLoggedIn",
  component: UserLoggedIn,
} as ComponentMeta<typeof UserLoggedIn>;

export const userLogin: ComponentStory<typeof UserLoggedIn> = () => (
  <UserLoggedIn></UserLoggedIn>
);
