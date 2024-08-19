import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "../../intro/Navbar";
import { navItems } from "../../intro/NavItems";

describe("Navbar Component", () => {
  it("should render navbar correctly", () => {
    render(<Navbar />);

    expect(screen.getByText("Rames")).toBeInTheDocument();
    expect(screen.getByText("h")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();

    navItems.forEach(({ text }) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
