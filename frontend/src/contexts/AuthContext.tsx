import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

interface ContextData {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as ContextData);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
