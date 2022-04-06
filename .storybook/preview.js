export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme/index";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
