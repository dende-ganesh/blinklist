import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";

// const LoginPage = () => {
//   return (
//     <Auth0Provider domain={""} clientId={""}>
//       <LoginPage></LoginPage>
//     </Auth0Provider>
//   );
// };
test(" to check LoginPage name ", () => {
  render(<LoginPage />);
  const bodyElement = screen.getByText(/Welcome/i);
  expect(bodyElement).toBeInTheDocument();
});
test(" to check LoginPage name ", () => {
  render(<LoginPage />);
  const bodyElement = screen.getByRole("button", { name: "Login" });
  fireEvent.click(bodyElement);
  expect(bodyElement).toBeInTheDocument();
});
test(" to check LoginPage name ", () => {
  render(<LoginPage />);
  const bodyElement = screen.getByRole("button", { name: "Signup" });
  fireEvent.click(bodyElement);
  expect(bodyElement).toBeInTheDocument();
});
