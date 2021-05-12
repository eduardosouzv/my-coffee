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

  span {
    margin-right: 1vw;

    a {
      color: #444b54;
      font-weight: bold;
      font-family: Rotobo, sans-serif;
      text-transform: uppercase;
      text-decoration: none;

      font-size: 0.8em;

      border: 1px solid #444b54;
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
