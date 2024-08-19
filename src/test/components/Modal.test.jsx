import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Modal from "../../components/Modal";
import "@testing-library/jest-dom";

describe("Renders modal with correct status", () => {
  it("should render modal componet", () => {
    render(<Modal modalStatus="Thank you for your email" />);
  });
  const statusElement = screen.queryByText("Thank you for your email");
  expect(statusElement).toBeDefined();
});
