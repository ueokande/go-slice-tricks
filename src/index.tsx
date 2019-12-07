import React from "react";
import ReactDOM from "react-dom";
import CheatSheet from "./components/CheatSheet";
import { createGlobalStyle } from "styled-components";
import "highlight.js/styles/a11y-dark.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <CheatSheet />
  </React.Fragment>,
  document.getElementById("root")
);
