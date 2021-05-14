import React from 'react';
import { GlobalLayout, HeaderContainer, HeaderInner } from './styles';
import { FiPhone } from 'react-icons/fi';

function Header() {
  return (
    <>
      <GlobalLayout />
      <HeaderContainer>
        <HeaderInner style={{ zIndex: 0, position: 'static' }}>
          <div className="inline_block_content">최적가에 도전합니다. 회사소개 자료를 받아보세요!</div>
          <div className="inline_block_content">
            <button>회사소개 &gt;</button>
          </div>
          <div className="inline_block_content">
            <div className="inline_block_div">
              <FiPhone />
            </div>
            <button>070-7771-5517</button>
          </div>
        </HeaderInner>
        <HeaderInner>
          <div className="inline_block_content">최적가에 도전합니다. 회사소개 자료를 받아보세요!</div>
          <div className="inline_block_content">
            <button>회사소개 &gt;</button>
          </div>
          <div className="inline_block_content">
            <div className="inline_block_div">
              <FiPhone />
            </div>
            <button>070-7771-5517</button>
          </div>
        </HeaderInner>
      </HeaderContainer>
    </>
  );
}
export default Header;
