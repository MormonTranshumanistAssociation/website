import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Abel, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  /* Remove scroll on the body when react-modal is open */
  .ReactModal__Body--open {
    //overflow: hidden;
  }
  
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4 {
    font-weight: 400;
  }
  
  p,
  label {
    font-family: 'Source Sans Pro', 'Abel', Helvetica, Arial, sans-serif;
    font-weight: 300;
    line-height: 1.5em;
    color: rgba(0,0,0,.9);
  }
`;
