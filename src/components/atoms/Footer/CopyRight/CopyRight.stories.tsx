import CopyRight from "./CopyRight";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "atoms/Footer/CopyRight",
  component: CopyRight,
} as ComponentMeta<typeof CopyRight>;

export const copyRight: ComponentStory<typeof CopyRight> = () => (
  <CopyRight></CopyRight>
);
