import { useContext, useRef } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { Overlay, Container, Header, Button, Form } from './styles';

import close from '../../assets/icons/close.svg';

interface IRegisterCredentials {
  username: string;
  password: string;
}

export const RegisterModal = () => {
  const { setIsRegisterModalOpen, register, registerCredentialsWarningStatus } =
    useContext(AuthContext);

  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const repeatInput = useRef<HTMLInputElement>(null);

  function handleSubmit(): void {
    const username = usernameInput.current?.value;
    const password = passwordInput.current?.value;
    const repeat = repeatInput.current?.value;

    register({ username, password, repeat } as IRegisterCredentials);
  }

  return (
    <>
      <Overlay>
        <Container>
          <Header>Join us</Header>
          <Form>
            {registerCredentialsWarningStatus.active ? (
              <p style={{ color: 'red' }}>{registerCredentialsWarningStatus.message}</p>
            ) : null}
            <input ref={usernameInput} type="text" placeholder="User" />

            <input ref={passwordInput} type="password" placeholder="Password" />
            <input ref={repeatInput} type="password" placeholder="Repeat Password" />

            <div>
              <button
                onClick={() => {
                  handleSubmit();
                }}
              >
                Register
              </button>
            </div>
          </Form>

          <Button
            onClick={() => {
              setIsRegisterModalOpen(false);
            }}
          >
            <img src={close} alt="Fechar modal" />
          </Button>
        </Container>
      </Overlay>
    </>
  );
};
