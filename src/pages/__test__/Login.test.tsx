import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Login from '../Login';
import { authApi } from '../../api/auth';

jest.mock('@tanstack/react-router', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}));

jest.mock('../../api/auth', () => ({
  authApi: {
    login: jest.fn(),
  },
}));

jest.mock('react-hot-toast', () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe('Login Component', () => {
  const mockNavigate = jest.fn();
  const mockMutateAsync = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useMutation as jest.Mock).mockReturnValue({
      mutateAsync: mockMutateAsync,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Login component', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Add your details to create a personal touch to your profile.')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('successful login', async () => {
    const token = 'fake-token';
    (authApi.login as jest.Mock).mockResolvedValueOnce({ data: { token } });

    render(<Login />);
    
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'alex' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => expect(mockMutateAsync).toHaveBeenCalled());

    expect(authApi.login).toHaveBeenCalledWith({ username: 'alex', password: 'password' });
    expect(mockNavigate).toHaveBeenCalledWith({ to: '/' });
  });

  test('failed login shows error toast', async () => {
    (authApi.login as jest.Mock).mockRejectedValueOnce(new Error('Invalid credentials'));

    render(<Login />);

    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'alex' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'wrong-password' } });
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => expect(mockMutateAsync).toHaveBeenCalled());

    expect(toast.error).toHaveBeenCalledWith('Username or Password is wrong');
  });
});
