import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import CopyRight from "./FooterCopyRight";

test(" to check  footer  logo with tag ", () => {
  render(<CopyRight />);
  const Element = screen.getByText(/© Blinkist 2021 Sitemap /i);
  expect(Element).toBeInTheDocument();
});
