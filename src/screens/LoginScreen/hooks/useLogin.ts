import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { LoginRequest } from '../models/LoginModel';
import { loginService } from '../services/loginService';

const useLogin = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      const credentials: LoginRequest = { email, password };
      await loginService(credentials, signIn);
    } catch {
      setError('Email ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

  return { email, password, setEmail, setPassword, handleLogin, error, loading };
};

export default useLogin;
