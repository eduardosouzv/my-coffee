import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: white;
  width: 100%;
  max-width: 800px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  overflow: auto;
  height: 500px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 3em;
  margin: 3vh;
  font-weight: 600;
  color: #393939;
  font-family: Roboto, sans-serif;

  button {
    background: none;
    cursor: pointer;
    color: #444b54;
    font-weight: bold;
    font-family: Rotobo, sans-serif;
    text-transform: uppercase;
    text-decoration: none;

    height: 4em;

    border: 1px solid #444b54;
    border-radius: 5px;
    padding: 10px;

    &:hover {
      background-color: #444b54;
      color: white;

      transition: 0.2s;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  margin: 1em;

  font-family: sans-serif;
`;

export const ItemIcon = styled.img`
  width: 80px;

  border-radius: 15px;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;

  margin: 0 0.5em;

  border: none;
  background: none;

  cursor: pointer;
`;

export const End = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 0.4vw;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;

  background: none;
  border: none;

  cursor: pointer;
`;
