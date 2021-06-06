import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 24px;
  color: #444b54;
  text-transform: uppercase;

  margin: 0 0 0 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #444b54;

  div {
    display: flex;
    align-items: center;

    button:last-child {
      margin-right: 1vw;
      color: #444b54;
      font-weight: bold;
      font-family: Rotobo, sans-serif;
      text-transform: uppercase;
      text-decoration: none;
      background: none;
      cursor: pointer;

      font-size: 0.8em;

      border: 2px solid #444b54;
      border-radius: 5px;
      padding: 10px;

      &:hover {
        background-color: #444b54;
        color: white;

        transition: 0.2s;
      }
    }
  }
`;

export const Logo = styled.div`
  img {
    width: 60px;
    padding: 0 0 20px;
  }

  display: flex;
  align-items: center;
`;

export const Cart = styled.button`
  cursor: pointer;

  border: none;
  background: none;

  margin-right: 2.3vw;
  align-items: center;
  padding: 0 2px 0 0;

  &:hover {
    border-bottom: 5px solid #f9ffa6;
    transition: 0.1s;
  }

  img {
    width: 1.7em;
  }
`;
