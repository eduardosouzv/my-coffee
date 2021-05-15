import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { Overlay, Container, Header, Button, Form } from './styles';

import close from '../../assets/icons/close.svg';

export const RegisterModal = () => {
  const { setIsRegisterModalOpen } = useContext(AuthContext);

  return (
    <>
      <Overlay>
        <Container>
          <Header>Join us</Header>
          <Form>
            <input type="text" placeholder="User" />

            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat Password" />

            <div>
              <button>Register</button>
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
