import React from 'react';
import './Page.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 4em;
  margin-left: 60px;
  margin-right: 60px;
  text-align: center;
`;

export const NoMatch = () => (
  <Wrapper>
    <h2>ERROR: Page Not Found</h2>
  </Wrapper>
)