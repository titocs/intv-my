// Profile.test.tsx
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";
import Profile from "../Profile"; // Sesuaikan path impor sesuai struktur proyek Anda
import { authApi } from "../../api/auth";

vi.mock("../api/auth");

const queryClient = new QueryClient();

const renderWithQueryClient = (component: JSX.Element) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>

};

describe("Profile Component", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  test("renders loader when data is loading", async () => {
    authApi.getUser = vi.fn().mockReturnValue(
      new Promise(() => {})
    );

    renderWithQueryClient(<Profile />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders profile details when data is loaded", async () => {
    authApi.getUser = vi.fn().mockResolvedValue({
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
    });

    renderWithQueryClient(<Profile />);

    expect(await screen.findByText(/Profile Details/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toHaveValue("John");
    expect(screen.getByLabelText(/Last Name/i)).toHaveValue("Doe");
    expect(screen.getByLabelText(/Email/i)).toHaveValue("john.doe@example.com");
  });

});
