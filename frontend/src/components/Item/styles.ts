import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  color: #393939;
`;

export const Element = styled.div`
  text-align: center;

  max-width: 300px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3vh 3vw;
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
  box-shadow: 2px 3px #444b54;
  border-radius: 5px;
`;

export const Price = styled.span`
  color: #393939;
  font-family: Roboto, sans-serif;
  font-size: 1.2em;
`;
