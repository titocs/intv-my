import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";
import Profile from "../Profile";
import { authApi } from "../../api/auth";

vi.mock("../../api/auth");

const queryClient = new QueryClient();

const renderWithQueryClient = (component: JSX.Element) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {component}
    </QueryClientProvider>
  );
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
    authApi.getUser =  vi.fn().mockResolvedValue({
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
    });
    
    renderWithQueryClient(<Profile />);

    // const headingElement = await screen.getByRole('heading', {
    //   level: 1
    // })
    // expect(headingElement).toBeInTheDocument();

    // expect(await screen.findByText('Profile Details')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByLabelText(/First Name/i)).toHaveValue("John");
    })

    // expect(screen.getByLabelText("last-name")).toHaveValue("Doe");
    // expect(screen.getByLabelText("email")).toHaveValue("john.doe@example.com");
  });
});
