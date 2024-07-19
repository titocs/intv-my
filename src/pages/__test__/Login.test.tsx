// // src/components/__tests__/Login.test.tsx

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { RouterProvider, createMemoryRouter } from '@tanstack/react-router';
// import Login from '../Login';  // Adjust the path as necessary

// // Mock the authApi module
// jest.mock('../../api/auth', () => ({
//   authApi: {
//     login: jest.fn().mockResolvedValue({ data: { token: 'test-token' } })
//   }
// }));

// // Mock the Token module
// jest.mock('../../utils/token', () => ({
//   Token: {
//     setLoggedInIdentifier: jest.fn()
//   }
// }));

// // Mock the useNavigate hook from tanstack/react-router
// const mockNavigate = jest.fn();
// jest.mock('@tanstack/react-router', () => ({
//   useNavigate: () => mockNavigate
// }));

// describe('Login component', () => {
//   const queryClient = new QueryClient();

//   const setup = () => {
//     render(
//       <QueryClientProvider client={queryClient}>
//         <RouterProvider router={createMemoryRouter()}>
//           <Login />
//         </RouterProvider>
//       </QueryClientProvider>
//     );
//   };

//   it('should render the login form', () => {
//     setup();
//     expect(screen.getByText('Login')).toBeInTheDocument();
//     expect(screen.getByLabelText('Username')).toBeInTheDocument();
//     expect(screen.getByLabelText('Password')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
//   });

//   it('should handle login successfully', async () => {
//     setup();

//     fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
//     fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });

//     fireEvent.click(screen.getByRole('button', { name: /login/i }));

//     // Wait for the mutation to resolve
//     await screen.findByText('Add your details below to get back into the app');

//     // Check if the token is set
//     expect(require('../../utils/token').Token.setLoggedInIdentifier).toHaveBeenCalledWith('test-token');

//     // Check if navigation is called
//     expect(mockNavigate).toHaveBeenCalledWith({ to: '/' });
//   });

//   it('should display an error message on login failure', async () => {
//     // Mock the login to reject
//     require('../../api/auth').authApi.login.mockRejectedValueOnce(new Error('Login failed'));

//     setup();

//     fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'wronguser' } });
//     fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'wrongpassword' } });

//     fireEvent.click(screen.getByRole('button', { name: /login/i }));

//     // Wait for the error toast
//     await screen.findByText('Username or Password is wrong');

//     // Check if the token is not set
//     expect(require('../../utils/token').Token.setLoggedInIdentifier).not.toHaveBeenCalled();

//     // Check if navigation is not called
//     expect(mockNavigate).not.toHaveBeenCalled();
//   });
// });
