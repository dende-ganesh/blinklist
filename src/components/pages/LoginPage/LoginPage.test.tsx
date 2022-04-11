import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import React, { ReactNode } from "react";
import "@testing-library/jest-dom";
import { Auth0Provider } from "@auth0/auth0-react";
const MockLoginPage = () => {
  return (
    <Auth0Provider
      domain="dev-j2thg76y.us.auth0.com"
      clientId="ZS7bN3N8n8t0FWrRAj75veKmBBCNXaok"
      redirectUri={window.location.origin}
    >
      <LoginPage></LoginPage>
    </Auth0Provider>
  );
};
test(" to check LoginPage name ", () => {
  render(<MockLoginPage />);
  const bodyElement = screen.getByText(/Welcome/i);
  expect(bodyElement).toBeInTheDocument();
});
test(" to check LoginPage name ", () => {
  render(<MockLoginPage />);
  const bodyElement = screen.getByRole("button", { name: "Login" });
  fireEvent.click(bodyElement);
  expect(bodyElement).toBeInTheDocument();
});
test(" to check LoginPage name ", () => {
  render(<MockLoginPage />);
  const bodyElement = screen.getByRole("button", { name: "Signup" });
  fireEvent.click(bodyElement);
  expect(bodyElement).toBeInTheDocument();
});
