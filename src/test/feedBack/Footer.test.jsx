import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../../feedBack/Footer";

describe("Footer Component", () => {
  it("should render footer component correctly", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2024 Your Company. All rights reserved./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Supportive Partner ❤️ Smriti/i)
    ).toBeInTheDocument();
  });
});
