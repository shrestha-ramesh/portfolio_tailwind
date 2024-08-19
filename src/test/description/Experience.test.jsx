import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experience from "../../description/Experience";
import { experienceItems } from "../../description/ExperienceItems";

describe("Experience Component", () => {
  it("should render experience correctly", () => {
    render(<Experience />);

    const mainHeading = screen.getByText("Experience");
    expect(mainHeading).toBeInTheDocument();

    const introParagraph = screen.getByText(
      "I've experiance in below technologies."
    );
    expect(introParagraph).toBeInTheDocument();

    // Check for each experience item
    experienceItems.forEach(({ name }) => {
      const experienceName = screen.getByText(name);
      expect(experienceName).toBeInTheDocument();
    });
  });
});
