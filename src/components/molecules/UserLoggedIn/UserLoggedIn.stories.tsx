import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserLoggedIn from "./UserLoggedIn";

export default {
  title: "Molecules/UserLoggedIn",
  component: UserLoggedIn,
} as ComponentMeta<typeof UserLoggedIn>;

export const userLogin: ComponentStory<typeof UserLoggedIn> = () => (
  <UserLoggedIn
    logClick={false}
    handleLogin={function (): void {
      throw new Error("Function not implemented.");
    }}
  ></UserLoggedIn>
);
