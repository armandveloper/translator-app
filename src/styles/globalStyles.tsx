import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: #121212;
    --color-bg-3:#424242;
    --color-text: #fff;
    --color-primary: #5290f5;
  }
  @media (prefers-color-scheme: light) {
    :root {
      --color-bg: #fff;
      --color-bg-3:#d8d8d8;
      --color-text: #000;
      --color-primary: #5290f5;  
    }
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
    margin: 0;
  }
  body.light {
    --color-bg: #fff;
    --color-bg-3:#d8d8d8;
    --color-text: #000;
    --color-primary: #5290f5;  
  }
  @media (any-hover: hover) {
    [title] {
    position: relative;
    }
    [title]:hover::before {
      content: attr(title);
      position: absolute;
      bottom: 100%;
      left: 0;
      display: inline-block;
      padding: 0.3rem 0.6rem;
      border-radius: 2px;
      background: #000;
      color: #fff;
      font-size: 1.2rem,;
      font-family: inherit;
      white-space: nowrap;
    }
  }
`;

export default GlobalStyles;
