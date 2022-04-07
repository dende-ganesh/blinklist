import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import FooterHighlight from "./FooterHighlight";

test(" to check  footer  logo with tag ", () => {
  render(<FooterHighlight />);
  const Element = screen.getByText(
    /Big ideas in small packages Start learning now/i
  );
  expect(Element).toBeInTheDocument();
});
