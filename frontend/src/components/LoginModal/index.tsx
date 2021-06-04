import { Overlay, Container, Header, Button, Form } from './styles';

import close from '../../assets/icons/close.svg';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface IUserCredentials {
  username: string;
  password: string;
}

export const LoginModal = () => {
  const {
    setIsLoginModalOpen,
    setIsRegisterModalOpen,
    login,
    loginCredentialsWarningStatus,
  } = useContext(AuthContext);
  const userInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    const username = userInput.current?.value;
    const password = passwordInput.current?.value;

    login({ username, password } as IUserCredentials);
  }

  return (
    <>
      <Overlay>
        <Container>
          <Header>Welcome</Header>
          <Form>
            {loginCredentialsWarningStatus.active ? (
              <p style={{ color: 'red' }}>{loginCredentialsWarningStatus.message}</p>
            ) : null}
            <input ref={userInput} type="text" placeholder="User" />

            <input ref={passwordInput} type="password" placeholder="Password" />

            <div>
              <button
                onClick={() => {
                  setIsLoginModalOpen(false);
                  setIsRegisterModalOpen(true);
                }}
              >
                Create account
              </button>
              <button
                onClick={() => {
                  handleSubmit();
                }}
              >
                Login
              </button>
            </div>
          </Form>

          <Button
            onClick={() => {
              setIsLoginModalOpen(false);
            }}
          >
            <img src={close} alt="Fechar modal" />
          </Button>
        </Container>
      </Overlay>
    </>
  );
};
