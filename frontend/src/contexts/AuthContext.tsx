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
  loginCredentialsWarningStatus: warningMessage;
  registerCredentialsWarningStatus: warningMessage;
  data: AuthState;
  isLogged: boolean;
  logout(): void;
  login({ username, password }: IUserCredentials): Promise<void>;
  register({ username, password }: IUserCredentials): void;
  verifyJWT(): void;
}

interface IUserCredentials {
  username: string;
  password: string;
}
interface IRegisterCredentials {
  username: string;
  password: string;
  repeat: string;
}

interface AuthState {
  token: string;
  id: string;
  user: string;
}

interface warningMessage {
  active: boolean;
  message: string;
}

export const AuthContext = createContext({} as ContextData);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const [loginCredentialsWarningStatus, setLoginCredentialsWarningStatus] =
    useState<warningMessage>({
      active: false,
      message: '',
    });

  const [registerCredentialsWarningStatus, setRegisterCredentialsWarningStatus] =
    useState<warningMessage>({
      active: false,
      message: '',
    });

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const user = localStorage.getItem('user');

    if (token && id && user) {
      return { token, id, user };
    }

    return {} as AuthState;
  });

  async function verifyJWT(): Promise<void> {
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

  async function login({ username, password }: IUserCredentials): Promise<void> {
    try {
      setLoginCredentialsWarningStatus({
        active: false,
        message: '',
      });
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
      setLoginCredentialsWarningStatus({
        active: true,
        message: error.response.data.message,
      });
    }
  }

  async function register({
    username,
    password,
    repeat,
  }: IRegisterCredentials): Promise<void> {
    setRegisterCredentialsWarningStatus({
      active: false,
      message: '',
    });
    try {
      if (password !== repeat) {
        setRegisterCredentialsWarningStatus({
          active: true,
          message: 'different passwords',
        });
        return;
      }
      const response = await api.post('/user/register', {
        user: username,
        password,
      });

      if (response) {
        setIsRegisterModalOpen(false);
        login({ username, password });
      }
    } catch (err) {
      setRegisterCredentialsWarningStatus({
        active: true,
        message: err.response.data.message,
      });
    }
  }

  function logout(): void {
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
        loginCredentialsWarningStatus,
        data,
        login,
        logout,
        register,
        verifyJWT,
        isLogged,
        registerCredentialsWarningStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
