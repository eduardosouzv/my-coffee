import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #f2f2f2;

  max-height: 200px;

  padding: 1.3em;

  font-family: Roboto, sans-serif;
  color: #444b54;

  img {
    width: 20em;
  }

  div {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled.button`
  align-self: flex-end;

  color: #444b54;
  font-weight: bold;
  font-family: Rotobo, sans-serif;

  text-decoration: none;
  background: none;
  cursor: pointer;

  font-size: 0.8em;

  border: 2px solid #444b54;
  border-radius: 5px;

  padding: 1em 3em;

  &:hover {
    background-color: green;
    color: white;
    border: 2px solid green;

    transition: 0.2s;
  }
`;

export const Price = styled.p`
  color: black;
`;
