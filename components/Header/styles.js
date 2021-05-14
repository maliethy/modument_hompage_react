import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
export const GlobalLayout = () => (
  <Global
    styles={css`
      .inline_block_div {
        display: inline-block;
      }
      .inline_block_content {
        display: inline-block;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    `}
  />
);
export const HeaderContainer = styled.div`
  border: 1px solid blue;
`;
export const HeaderInner = styled.div`
  display: block;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: white;
`;
export const ContentLayout = styled.div`
  background-color: grey;
`;
export const Section = styled.div`
  height: 100wh;
`;
export const Footer = styled.div`
  background-color: green;
`;
