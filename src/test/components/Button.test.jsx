import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";
import { describe, expect, it } from "vitest";

describe("Button Component render", () => {
  it("should render button component with props", () => {
    render(
      <Button
        buttonName="Click Me"
        buttonStyle="btn-primary"
        buttonHref="https://example.com"
      />
    );

    const buttonName = screen.getByText("Click Me");
    expect(buttonName).toBeInTheDocument();
    expect(buttonName.closest("a")).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(buttonName.closest("button")).toHaveClass("btn-primary");
  });
});
