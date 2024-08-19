import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../../description/About";

describe("About compoent", () => {
  it("render about component correctly", () => {
    render(<About />);

    // Check for the main heading
    const mainHeading = screen.getByText("About");
    expect(mainHeading).toBeInTheDocument();

    // Check for the introduction paragraph
    const introParagraph = screen.getByText(/Hello, I'm Ramesh/i);
    expect(introParagraph).toBeInTheDocument();

    // Check for the Education & Training section
    const educationHeading = screen.getByText("Education & Training");
    expect(educationHeading).toBeInTheDocument();

    const educationDetails = screen.getByText(/Bachelor of Computer Science/i);
    expect(educationDetails).toBeInTheDocument();

    // Check for the Skills & Expertise section
    const skillsHeading = screen.getByText("Skills & Expertise");
    expect(skillsHeading).toBeInTheDocument();

    const skillsDetails = screen.queryByText(
      "Proficient in Java Experienced with intelliJ Strong grasp of Emphasis Excellent problem-solving skills Effective communicator and collaborator"
    );
    expect(skillsDetails).toBeInTheDocument();

    // Check for the Professional Experience section
    const experienceHeading = screen.getByText("Professional Experience");
    expect(experienceHeading).toBeInTheDocument();

    const experienceDetails = screen.getByText(/Sotware Engineer/i);
    expect(experienceDetails).toBeInTheDocument();

    // Check for the Mission Statement section
    const missionHeading = screen.getByText("Mission Statement");
    expect(missionHeading).toBeInTheDocument();

    const missionDetails = screen.getByText(
      /My mission is to leverage my skills/i
    );
    expect(missionDetails).toBeInTheDocument();
  });
});
