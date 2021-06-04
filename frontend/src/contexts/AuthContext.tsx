import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

import api from '../config/api';

interface ProviderProps {
  children: ReactNode;
}

interface ContextData {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  isRegisterModalOpen: boolean;
  setIsRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
  wrongCredentialsMessage: string | null;
  data: AuthState;
  isLogged: boolean;
  logout(): void;
  login({ username, password }: IUserCredentials): Promise<void>;
  verifyJWT(): void;
}

interface IUserCredentials {
  username: string;
  password: string;
}

interface AuthState {
  token: string;
  id: string;
  user: string;
}

export const AuthContext = createContext({} as ContextData);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const user = localStorage.getItem('user');

    if (token && id && user) {
      return { token, id, user };
    }

    return {} as AuthState;
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [wrongCredentialsMessage, setWrongCredentialsMessage] =
    useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  async function verifyJWT() {
    try {
      const validated = await api.post('/session/verify', {
        token: data.token,
      });
      if (validated) {
        setIsLogged(true);
      }
    } catch (error) {
      setIsLogged(false);
    }
  }

  async function login({ username, password }: IUserCredentials) {
    try {
      setWrongCredentialsMessage(null);
      const response = await api.post('/session', {
        user: username,
        password: password,
      });

      const { token, id, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('user', user);

      setData({ token, id, user });
      setIsLoginModalOpen(false);
    } catch (error) {
      setWrongCredentialsMessage(error.response.data.message);
    }
  }

  function logout() {
    setData({} as AuthState);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        isRegisterModalOpen,
        setIsRegisterModalOpen,
        wrongCredentialsMessage,
        data,
        login,
        logout,
        verifyJWT,
        isLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
