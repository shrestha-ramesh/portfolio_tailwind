import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Login from "../../pages/Login";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// Mock the useNavigate hook
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    BrowserRouter: ({ children }) => <div>{children}</div>,
  };
});
const setUser = vi.fn();
const renderComponent = () =>
  render(
    <UserContext.Provider value={{ setUser }}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </UserContext.Provider>
  );
describe("Login Page", () => {
  it("renders login form", () => {
    renderComponent();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Login/i);
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveTextContent(/Login/i);
  });
  it("handle input change", () => {
    renderComponent();
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password");
  });
  it("calls setUserFunction after 2 seconds", async () => {
    vi.useFakeTimers();
    renderComponent();
    vi.advanceTimersByTime(2000);
    expect(setUser).toHaveBeenCalledWith({
      email: "shresthashare@gmail.com",
      password: "password",
    });
  });
});
