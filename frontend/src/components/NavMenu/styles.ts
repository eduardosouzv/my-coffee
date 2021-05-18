import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  color: #393939;
  font-size: 1.3em;
  text-transform: uppercase;
  padding: 0 0 0 10px;
  cursor: pointer;
`;

export const List = styled.ul`
  font-family: Roboto, sans-serif;
  font-size: 1.3em;
  color: #393939;
  text-transform: uppercase;

  li {
    margin: 0 20px;
    cursor: pointer;
  }

  list-style-type: none;
  display: flex;
  margin-left: 10px;
`;

export const Menu = styled.div`
  display: flex;

  justify-content: center;

  border-bottom: 1px solid #444b54;
  padding: 20px 0;
`;
