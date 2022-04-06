import ToggleTabs from "./ToggleTabs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/ToggleTabs",
  component: ToggleTabs,
} as ComponentMeta<typeof ToggleTabs>;

export const toggleTabs: ComponentStory<typeof ToggleTabs> = () => {
  return (
    <ToggleTabs
      active={""}
      setActive={function (activeState: string): void {
        throw new Error("Function not implemented." + activeState);
      }}
    ></ToggleTabs>
  );
};
