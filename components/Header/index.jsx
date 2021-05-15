import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { GlobalLayout, HeaderContainer, HeaderInner, IntroButton } from './styles';
import { FiPhone } from 'react-icons/fi';

function Header() {
  const onDownLoadFile = useCallback(() => {
    window.location.href =
      'http://modu1.dsoob.com/download.cm?tk=YToyOntpOjA7czoxMzoiMTZiNTY2ZTFmYzQyYyI7aToxO3M6MjI6ImYyMDIxMDQyOWYwYzA2ZDI1Y2YzNzMiO30=';
  }, []);
  const onPhoneCall = useCallback(() => {
    window.location.href = 'tel://+07077715517';
  }, []);

  return (
    <>
      <GlobalLayout />
      <HeaderContainer>
        <div style={{ marginTop: 47 }} />
        <HeaderInner>
          <div style={{ color: '#363636' }}> 최적가에 도전합니다. 회사소개 자료를 받아보세요!</div>

          <IntroButton onClick={onDownLoadFile}>회사소개 &gt;</IntroButton>

          <div style={{ position: 'absolute', right: 15 }}>
            <div
              onClick={onPhoneCall}
              style={{
                cursor: 'pointer',
                color: '#212121',
                fontSize: 22,
                fontFamily: 'NotoSansTC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FiPhone />
              <div style={{ marginLeft: '0.4em' }}>070-7771-5517</div>
            </div>
          </div>
        </HeaderInner>
      </HeaderContainer>
    </>
  );
}
export default Header;
