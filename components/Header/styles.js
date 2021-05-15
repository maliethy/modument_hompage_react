import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
export const GlobalLayout = () => <Global styles={css``} />;
export const HeaderContainer = styled.div`
  position: relative;
`;
export const HeaderInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: white;
`;
export const IntroButton = styled.button`
  border-radius: 30px;
  border-color: #212121;
  padding: 6px 20px;
  font-size: 14px;
  background-color: #212121;
  color: #fff;
  margin-left: 10px;
`;
