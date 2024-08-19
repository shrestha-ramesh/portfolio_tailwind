import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../../intro/Home";

describe("Home component", () => {
  it("should render home component correctly", () => {
    render(<Home />);

    expect(screen.getByText(/Welcome In My Feed/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello, I'm a/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello there! 👋 I'm Ramesh/i)).toBeInTheDocument();
    expect(screen.getByText(/Available on/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();

  });
});
