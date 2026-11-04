import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./src/App";

test("renders hello world", () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, World!/i);
  expect(headingElement).toBeInTheDocument();
});
