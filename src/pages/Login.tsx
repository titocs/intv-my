import { useNavigate } from '@tanstack/react-router';
import Input from '../components/ui/Input';
import PasswordIcon from '../assets/icons/icon-password.svg';
import IconEmail from '../assets/icons/icon-email.svg';
import Button from '../components/ui/Button';
import { useState } from 'react';
import { authApi } from '../api/auth';
import { Token } from '../utils/token';
import { useMutation } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async () => authApi.login({ username, password}),
    onSuccess: async (response) => {
      Token.setLoggedInIdentifier(response.data.token);
      navigate({
        to: '/'
      });
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginMutation.mutateAsync();
    } catch (error) {
      toast.error("Username or Password is wrong")
    }
  }

  return (
    <>
      <div className='mt-14 md:mt-4'>
        <div className='mb-10'>
          <h1 className='text-2xl font-semibold pb-2'>Login</h1>
          <p className='text-grey-custom-800'>Add your details below to get back into the app</p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-6'>
            <Input
              icon={IconEmail} 
              type="text" 
              label='Username' 
              placeholder='e.g. alex'
              errorMessage='Cant be empty' 
              required={true}
              value={username}
              setValue={setUsername}
               />
          </div>
          <div className='mb-6'>
            <Input 
              icon={PasswordIcon} 
              type="password" 
              label='Password' 
              placeholder='Enter your password'
              errorMessage='Please check again'
              required={true}
              value={password}
              setValue={setPassword} />
          </div>
          <Button label="Login"/>
        </form>
      </div>
      <Toaster />
    </>
  )
}

export default Login