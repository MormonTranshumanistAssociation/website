import styled from 'styled-components';

export default styled.nav`
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(255,255,255,.7);
  z-index: 1000000;
  a {
    display: inline-flex;
    padding: 10px 0 10px 3px;
    margin: 0 1rem;
    text-decoration: none;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.65rem;
    color: #2d371e;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  a:hover, a:hover span, a:active, a:active span {
    text-decoration: none !important;
  }
  a.selectedLink {
    border-top: solid 1px rgba(0,0,0,.7);
  }
`;
