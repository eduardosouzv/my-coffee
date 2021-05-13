import { Overlay, Container, Header, Button, Form } from './styles';

import close from '../../assets/icons/close.svg';

export const LoginModal = () => {
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

          <Button>
            <img src={close} alt="Fechar modal" />
          </Button>
        </Container>
      </Overlay>
    </>
  );
};
