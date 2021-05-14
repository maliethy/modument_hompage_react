import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
export const GlobalLayout = () => <Global styles={css``} />;

export const ContentLayout = styled.div`
  background-color: grey;
`;
export const Section = styled.div`
  height: 100vh;
`;
export const Footer = styled.div`
  background-color: green;
`;
