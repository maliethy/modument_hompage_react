import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
export const GlobalLayout = () => (
  <Global
    styles={css`
      .slick-slide {
        display: inline-block;
      }
      .slick-track {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
      }
    `}
  />
);
export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;
export const SlickWrapper = styled.div`
  background: #090909;
`;
export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  margin-right: 10px;
  line-height: 14px;
  cursor: pointer;
  font-size: 25px;
`;
export const Indicator = styled.div`
  text-align: center;
  padding-bottom: 5%;
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
export const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;
  & > img {
    margin: 0 auto;
    width: 50%;
  }
`;
