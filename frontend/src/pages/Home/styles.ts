import styled from 'styled-components';

export const Text = styled.h1`
  font-size: 3.5em;
  color: #393939;
  font-family: Roboto;
  width: 480px;

  margin-top: 15vh;
`;

export const Button = styled.span`
  a {
    padding: 30px 50px;
    cursor: pointer;
    border: 2px solid #444b54;
    border-radius: 5px;
    text-decoration: none;

    font-family: Roboto, sans-serif;
    font-size: 1.3em;
    color: #393939;

    &:hover {
      background-color: #444b54;
      color: white;
      transition: 0.2s;
    }
  }
`;

export const Aligned = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 400px;
    margin-left: auto;
  }
`;
