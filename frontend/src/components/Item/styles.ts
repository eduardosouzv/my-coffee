import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  color: #393939;
  font-size: 1.4em;
`;

export const Element = styled.div`
  text-align: center;
  max-width: 250px;
  margin: 0.8em 1.3em;

  div {
    padding: 0.7em;
    background-color: #f2f2f2;
    border-radius: 15px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const Description = styled.p`
  font-family: Roboto, sans-serif;
  color: #393939;
  font-size: 0.8em;
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 0.8em;
  color: #393939;
  text-transform: uppercase;

  background: none;
  padding: 10px;

  border: 2px solid #444b54;
  border-radius: 5px;

  &:hover {
    background-color: #444b54;
    color: white;

    transition: 0.5s;
  }
`;

export const Price = styled.span`
  color: #393939;
  font-family: Roboto, sans-serif;
  font-size: 1.2em;
`;
