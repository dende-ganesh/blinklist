import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import CurrentlyReadingGrid from "./CurrentlyReadingGrid";
test("to check currently reading grid ", async () => {
  await render(<CurrentlyReadingGrid />);
});
