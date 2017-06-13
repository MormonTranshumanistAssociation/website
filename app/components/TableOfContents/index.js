import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Wrapper = styled.div`
  width: 264px;
  float: right;
`;

const Nav = styled.nav`
  text-align: left;
  border-left: 1px solid rgba(0,0,0,.2);
  list-style-type: none;
  padding: 0 14px;
`;

export const Entry = styled(Link)`
  display: block;
  text-indent: -1em;
  padding-left: 1em;
  padding-bottom: .4em;
  line-height: 1.33em;
`;

export const TableOfContents = (props) => (
  <Wrapper>
    <Nav>
      {props.children}
    </Nav>
  </Wrapper>
);
TableOfContents.propTypes = {
  children: PropTypes.any,
};
export default TableOfContents;
