import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
export const GlobalLayout = () => <Global styles={css``} />;

export const ContentLayout = styled.div`
  background-color: grey;
`;
export const Section = styled.div`
  height: 100%;
`;
export const Footer = styled.div``;
export const TextBoxOne = styled.div`
  color: #fff;
  overflow: auto;
  .title {
    margin: 130px auto 40px;
  }
  & > p {
    font-size: 16px;
    margin: 0 0 2%;
  }
`;
export const TextBoxTwo = styled.div`
  color: #363636;
  margin: 90px 50px;
  .title {
    & > p {
      margin: 0;
    }
  }
`;
export const ImageWrapper = styled.div`
  margin-top: 50px;
  & > img {
    width: 281px;
    height: 351px;
  }
`;
export const ContentOne = styled.div`
  text-align: center;
  background-color: #023692;
  height: 793px;
`;
export const ContentTwo = styled.div`
  display: flex;
  justify-content: center;
  background-color: #efefef;
  height: 573px;
  padding-top: 90px;
`;
