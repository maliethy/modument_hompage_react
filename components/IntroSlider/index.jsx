import React from 'react';
import Slider from 'react-slick';
import logo from '@public/images/intro/modument_logo.png';
import slide1_mobile from '@public/images/intro/slide1_mobile.jpg';
import slide1_pc from '@public/images/intro/slide1_pc.jpg';
import slide2_mobile from '@public/images/intro/slide2_mobile.jpg';
import slide2_pc from '@public/images/intro/slide2_pc.jpg';
import slide3_mobile from '@public/images/intro/slide3_mobile.jpg';
import slide3_pc from '@public/images/intro/slide3_pc.jpg';
import slide4_mobile from '@public/images/intro/slide4_mobile.jpg';
import slide4_pc from '@public/images/intro/slide4_pc.jpg';
import slide5_mobile from '@public/images/intro/slide5_mobile.jpg';
import slide5_pc from '@public/images/intro/slide5_pc.jpg';
import slide2_number from '@public/images/intro/slide2_number.png';
import slide1_text from '@public/images/intro/slide1_text.png';
import slide2_text from '@public/images/intro/slide2_text.png';
import slide3_text from '@public/images/intro/slide3_text.jpg';
import { GlobalLayout, SlideHeader, LogoWrapper, SlickWrapper, Indicator, ImageWrapper } from './styles';

function IntroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: 'linear',
  };
  const img_lists = [
    {
      id: '01',
      src: {
        moblie: slide1_mobile,
        pc: slide1_pc,
      },
    },
    {
      id: '02',
      src: {
        moblie: slide2_mobile,
        pc: slide2_pc,
      },
    },
    {
      id: '03',
      src: {
        moblie: slide3_mobile,
        pc: slide3_pc,
      },
    },
    {
      id: '04',
      src: {
        moblie: slide4_mobile,
        pc: slide4_pc,
      },
    },
    {
      id: '05',
      src: {
        moblie: slide5_mobile,
        pc: slide5_pc,
      },
    },
  ];
  return (
    <>
      <GlobalLayout />
      <SlickWrapper>
        <SlideHeader>
          <LogoWrapper>
            <img src={logo} alt="modument_logo" />
          </LogoWrapper>
        </SlideHeader>

        <Slider {...settings}>
          {/* {img_lists.map((img, i) => {
            return (
              <ImageWrapper>

                <div style={{ background: `url(${img.src.pc}) no-repeat 50% 100% / 120%` }}>
                  <div style={{ width: '100%', height: 800 }}></div>
                </div>
              </ImageWrapper>
            );
          })} */}

          <div>
            <div
              style={{
                position: 'relative',
                background: ` url(${slide1_pc}) no-repeat 50% -50%/105% 90% `,
                textAlign: 'center',
              }}
            >
              <div style={{ position: 'relative', zIndex: 11 }}>
                <div style={{ margin: '0 auto', height: 800, display: 'table', tableLayout: 'fixed' }}>
                  <div style={{ textAlign: 'center', verticalAlign: 'middle', display: 'table-cell', height: '100%' }}>
                    <img
                      style={{ width: 250, height: 292, marginBottom: '250px' }}
                      src={slide1_text}
                      alt={`modument_intro1_text`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <img src={slide2_pc} alt="modument_intro2" />
          </div>
          <div>
            <img src={slide3_pc} alt="modument_intro3" />
          </div>
          <div>
            <img src={slide4_pc} alt="modument_intro4" />
          </div>
          <div>
            <img src={slide5_pc} alt="modument_intro5" />
          </div> */}
        </Slider>
        <Indicator />
      </SlickWrapper>
    </>
  );
}
export default IntroSlider;
