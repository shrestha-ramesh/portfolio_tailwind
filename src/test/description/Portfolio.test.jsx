import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Portfolio from "../../description/Portfolio";
import { portfolioItems } from "../../description/PortfolioItems";

describe("Portfolio Component", () => {
  it("should render portfolio component", () => {
    render(<Portfolio />);
    const mainHeading = screen.getByText("Portfolio");
    expect(mainHeading).toBeInTheDocument();

    const introSpan = screen.getByText("Feature Projects");
    expect(introSpan).toBeInTheDocument();

    // Check for each portfolio item
    portfolioItems.forEach(({ name, sourCodeLink }) => {
      const portfolioName = screen.queryByText(name);
      expect(portfolioName).toBeInTheDocument();

      const sourceCodeButton = screen.queryByText(sourCodeLink);
      expect(sourceCodeButton).toBeDefined();
    });
  });
});
