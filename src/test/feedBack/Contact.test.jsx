import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../../feedBack/Contact";

describe("Contact Component", () => {
  it("render contact form", () => {
    render(<Contact />);
    expect(screen.queryByText("Contact me")).toBeDefined();
    expect(
      screen.queryByText("Please fill out the form below to contact me")
    ).toBeDefined();
    expect(screen.queryByText("Contact me")).toBeDefined();
    expect(screen.queryByText("Full Name")).toBeDefined();
    expect(screen.queryByText("Email Address")).toBeDefined();
    expect(screen.queryByText("Message")).toBeDefined();
    expect(screen.queryByText("Send")).toBeDefined();

    expect(
      screen.getByPlaceholderText("Enter Your FullName")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Your Email Address")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Your Message")
    ).toBeInTheDocument();
  });
});
