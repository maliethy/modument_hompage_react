import React from 'react';
import './fonts.css';
import { ContentLayout, Section, Footer, ContentOne, ContentTwo, ImageWrapper, TextBoxOne, TextBoxTwo } from './styles';
import Header from '@components/Header';
import IntroSlider from '@components/IntroSlider';
import History from '@components/History';
import WarehouseLocation from '@components/WarehouseLocation';
import CooperationCompany from '@components/CooperationCompany';
import cost_compare from '@public/images/cost_compare.jpg';
import modument_video from '@public/assets/modument-video.mp4';

function App() {
  return (
    <div>
      <Header />
      <ContentLayout>
        <IntroSlider />
        <Section>
          <ContentOne>
            <TextBoxOne>
              <span className="title">
                <strong>"물류비 최적가에 도전합니다"</strong>
              </span>
              <p>단품 출고시</p>
              <p>작업비 &#43; 택배비 &#43; 포장재비(공박스 or 폴리백과 완충재)</p>
            </TextBoxOne>
            <ImageWrapper>
              <img src={cost_compare} alt="cost_compare" />
            </ImageWrapper>
          </ContentOne>
        </Section>
        <Section>
          <ContentTwo>
            <TextBoxTwo>
              <span className="title">
                <strong>주문받고, 포장하고, 택배보내느라</strong>
                <br />

                <strong>고생하시는 아버지를 위해!</strong>
                <p>모두먼트를 선물하세요</p>
              </span>
            </TextBoxTwo>
            <div>
              <video controls width="700">
                <source src={modument_video} type="video/mp4" />
              </video>
            </div>
          </ContentTwo>
        </Section>
        <History />
        <Section>picture2</Section>
        <WarehouseLocation />
        <CooperationCompany />
      </ContentLayout>
      <Footer>footer</Footer>
    </div>
  );
}
export default App;
