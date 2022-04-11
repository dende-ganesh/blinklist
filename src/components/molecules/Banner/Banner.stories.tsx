import Banner from "./Banner";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

export const banner: ComponentStory<typeof Banner> = () => <Banner></Banner>;
