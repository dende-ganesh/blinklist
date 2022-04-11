import Footer from "./Footer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organism/Footer/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const footer: ComponentStory<typeof Footer> = () => <Footer></Footer>;
