import styled from 'styled-components';

export const List = styled.ul`
  font-family: Roboto, sans-serif;
  font-size: 1.3em;
  color: #393939;
  text-transform: uppercase;

  li {
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      transition: 0.7s;
      &:nth-child(1) {
        box-shadow: 0 6px #d1a0f5;
      }
      &:nth-child(2) {
        box-shadow: 0 6px #fefc37;
      }
      &:nth-child(3) {
        box-shadow: 0 7px #94c2fe;
      }
    }
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
