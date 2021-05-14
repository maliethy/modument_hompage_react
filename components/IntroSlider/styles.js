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
      }

      .slick-dots {
        font-size: 0;
        border: none;
        display: flex !important;
        position: absolute;
        left: 50%;
        bottom: 5px;
        transform: translateX(-50%);
      }

      .slick-dots li button {
        width: 8px;
        height: 8px;
        margin: 4px;
        border: none;
        border-radius: 100%;
        font-size: 0;
        background: rgba(255, 255, 255, 0.5);
        padding: 4px;
        @media (max-width: 991px) {
          margin: 5px 4px;
        }
      }

      .slick-dots li.slick-active button {
        background: white;
        width: 24px;
        border-radius: 30px;
      }

      button.slick-arrow.slick-prev,
      button.slick-arrow.slick-next {
        display: none !important;
      }
      @media (max-width: 767px) {
      }
    `}
  />
);

export const SlideHeader = styled.header`
  position: relative;
`;
export const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  z-index: 99;
  & > img {
    width: 180px;
  }
`;
export const SlickWrapper = styled.div`
  background-color: #45b467;
  overflow: hidden;
`;

export const Indicator = styled.div`
  text-align: center;
  padding-bottom: 20px;
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
  width: 100vw;
  height: 100vh;
`;
