// // Login.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { vi } from 'vitest';
// import userEvent from '@testing-library/user-event';
// import Login from '../Login'; // Sesuaikan path impor sesuai struktur proyek Anda

// import { Toaster } from 'react-hot-toast';
// import { authApi } from '../../api/auth';
// import { useNavigate } from '@tanstack/react-router';
// import { Token } from '../../utils/token';

// vi.mock('../api/auth');
// vi.mock('@tanstack/react-router', () => ({
//   useNavigate: () => vi.fn(),
// }));
// vi.mock('../utils/token');

// const queryClient = new QueryClient();

// const renderWithQueryClient = (component: JSX.Element) => {
//   return render(
//     <QueryClientProvider client={queryClient}>
//       {component}
//       <Toaster />
//     </QueryClientProvider>
//   );
// };

// describe('Login Component', () => {
//   afterEach(() => {
//     vi.resetAllMocks();
//   });

//   test('renders login form', () => {
//     renderWithQueryClient(<Login />);

//     expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
//   });

//   test('shows loader when pending login', async () => {
//     renderWithQueryClient(<Login />);

//     const usernameInput = screen.getByLabelText(/Username/i);
//     const passwordInput = screen.getByLabelText(/Password/i);
//     const loginButton = screen.getByRole('button', { name: /Login/i });

//     userEvent.type(usernameInput, 'testuser');
//     userEvent.type(passwordInput, 'password123');

//     fireEvent.click(loginButton);

//     expect(screen.getByTestId('loader')).toBeInTheDocument();
//   });

//   test('calls login API and navigates on success', async () => {
//     const mockNavigate = vi.fn();
//     vi.mocked(authApi.login).mockResolvedValue({ data: { token: 'fake-token' } });
//     vi.mocked(useNavigate).mockReturnValue(mockNavigate);

//     renderWithQueryClient(<Login />);

//     const usernameInput = screen.getByLabelText(/Username/i);
//     const passwordInput = screen.getByLabelText(/Password/i);
//     const loginButton = screen.getByRole('button', { name: /Login/i });

//     userEvent.type(usernameInput, 'testuser');
//     userEvent.type(passwordInput, 'password123');

//     fireEvent.click(loginButton);

//     await screen.findByRole('button', { name: /Login/i });

//     expect(authApi.login).toHaveBeenCalledWith({ username: 'testuser', password: 'password123' });
//     expect(Token.setLoggedInIdentifier).toHaveBeenCalledWith('fake-token');
//     expect(mockNavigate).toHaveBeenCalledWith({ to: '/' });
//   });

//   test('shows error toast on login failure', async () => {
//     vi.mocked(authApi.login).mockRejectedValue(new Error('Failed to login'));

//     renderWithQueryClient(<Login />);

//     const usernameInput = screen.getByLabelText(/Username/i);
//     const passwordInput = screen.getByLabelText(/Password/i);
//     const loginButton = screen.getByRole('button', { name: /Login/i });

//     userEvent.type(usernameInput, 'testuser');
//     userEvent.type(passwordInput, 'password123');

//     fireEvent.click(loginButton);

//     await screen.findByRole('button', { name: /Login/i });

//     expect(screen.getByText(/Username or Password is wrong/i)).toBeInTheDocument();
//   });
// });
