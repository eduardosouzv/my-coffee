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
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
`;

export const Header = styled.header`
  font-size: 3em;
  margin-bottom: 3vh;
  font-weight: 600;
  color: #393939;
  font-family: Roboto, sans-serif;
`;

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    font-family: Roboto, sans-serif;
    color: #393939;
    padding: 12px 20px;
    width: 70%;
    border: 1px solid #393939;
    border-radius: 5px;
    margin: 4px;
    box-sizing: border-box;
  }

  div {
    width: 70%;
    display: flex;
    margin-top: 3px;

    align-items: flex-end;
    justify-content: flex-end;

    button {
      background: none;
      cursor: pointer;
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
