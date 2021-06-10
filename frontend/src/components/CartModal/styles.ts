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
  display: flex;
  flex-direction: column;

  background: white;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  max-width: 800px;
  width: 100%;
  padding: 2rem 3rem;

  overflow: auto;

  position: relative;
  height: 500px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;

  font-size: 3em;
  margin: 3vh;
  font-weight: 600;
  color: #393939;
  font-family: Roboto, sans-serif;
`;

export const CheckoutButton = styled.button`
  background: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-family: Rotobo, sans-serif;
  text-transform: uppercase;
  text-decoration: none;

  height: 4em;

  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    background-color: white;
    color: #444b54;

    transition: 0.2s;
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

  border: none;
  background: none;

  padding: 10px;

  cursor: pointer;

  &:last-child {
    padding: 15px 10px;
  }
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

export const EmptyMessage = styled.h1`
  margin: 3em auto;
  font-family: sans-serif;
  color: #d9d9d9;
`;

export const Footer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 4em;

  background-color: #444b54;
  color: white;

  padding: 6px;

  box-sizing: border-box;

  p {
    display: flex;
    align-items: center;

    font-family: Rotobo, sans-serif;
    font-size: 1.3em;
  }
`;
