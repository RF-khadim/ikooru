import { createGlobalStyle, css } from "styled-components";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #f1f1f1;
  }
  /* MARGINS */
  .mb-34 {
    margin-bottom: 34px !important;
  }

  .mt-30 {
    margin-top: 30px;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mt-50 {
    margin-top: 50px;
  }

  .mt-100 {
    margin-top: 100px;
  }

  .primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .secondary {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .text-center {
    text-align: center;
  }

  .text-align-center {
    text-align: center;
  }

  .display-none {
    display: none;
  }

  .d-flex {
    display: flex;
  }
  .j-center {
    justify-content: center;
  }
  .j-space-around {
    justify-content: space-around;
  }

  .align-items-center {
    align-items: center;
  }

  .gap-5 {
    gap: 5px;
  }

  .j-end {
    justify-content: flex-end;
  }

  .bold {
    font-weight: bold;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default GlobalStyle;
