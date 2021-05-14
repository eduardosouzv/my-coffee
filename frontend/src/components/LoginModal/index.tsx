import { Overlay, Container, Header, Button, Form } from './styles';

import close from '../../assets/icons/close.svg';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const LoginModal = () => {
  const { setIsLoginModalOpen } = useContext(AuthContext);

  return (
    <>
      <Overlay>
        <Container>
          <Header>Welcome</Header>
          <Form>
            <input id="name" type="text" placeholder="User" />

            <input id="password" type="password" placeholder="Password" />

            <div>
              <a href="/">Create account</a>
              <button>Login</button>
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
