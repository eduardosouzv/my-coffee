import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #E5E5E5
  }

  #root {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
`;
