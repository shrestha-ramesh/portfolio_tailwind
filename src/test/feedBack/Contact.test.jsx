import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Contact from "../../feedBack/Contact";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("Contact Component", () => {
  beforeEach(() => {
    mock.reset();
  });
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

  it("validates email and form submission", async () => {
    const formData = {
      email: "test@example.com",
      fullname: "John Doe",
      message: "Hello, this is a test message.!",
    };
    mock.onPost("/your-endpoint").reply((config) => {
      // Verify the request data
      expect(JSON.parse(config.data)).toEqual(formData);
      return [200, { message: formData.message }];
    });
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText(/Enter Your FullName/i), {
      target: { value: formData.fullname },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Your Email Address/i), {
      target: { value: formData.email },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Your Message/i), {
      target: { value: formData.message },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(formData.message)).toBeInTheDocument();
  });
  it("shows validation message and does not call POST method when fields are incomplete", async () => {
    render(<Contact />);

    // Leave fields empty and click submit
    fireEvent.click(screen.getByRole("button"));

    // Check for validation message
    expect(
      screen.queryByText(/please enter all the fields and a valid email/i)
    ).toBeDefined();

    // Ensure POST request is not called
    expect(mock.history.post.length).toBe(0);
  });
});
