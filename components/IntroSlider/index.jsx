import React from 'react';
import { Link } from 'react-router-dom';
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
import { GlobalLayout, SlideHeader, LogoWrapper, SlickWrapper, Indicator } from './styles';

function IntroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 7000,
    cssEase: 'linear',
  };

  return (
    <>
      <GlobalLayout />
      <SlickWrapper>
        <SlideHeader>
          <a href="/">
            <LogoWrapper>
              <img src={logo} alt="modument_logo" />
            </LogoWrapper>
          </a>
        </SlideHeader>

        <Slider {...settings}>
          <div>
            <div
              style={{
                background: `rgba(221, 221, 221, 0) url(${slide1_pc}) no-repeat 50% 50%/cover `,
              }}
            >
              <div>
                <div
                  style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ flexBasis: 'content', height: '100%', marginTop: 125 }}>
                    <img style={{ width: 409, height: 392 }} src={slide1_text} alt={`modument_intro1_text`} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                background: `rgba(221, 221, 221, 0) url(${slide2_pc}) no-repeat 50% 50%/cover `,
              }}
            >
              <div
                style={{
                  height: '100vh',
                  flexDirection: 'column',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img style={{ width: 474, height: 344 }} src={slide2_number} alt={`modument_intro2_text`} />
                <img style={{ width: 766, height: 38, marginTop: 60 }} src={slide2_text} alt={`modument_intro2_text`} />
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                height: '100vh',
                backgroundColor: '#45b467',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img style={{ width: 967, height: 428 }} src={slide3_pc} alt="modument_intro3" />
            </div>
          </div>
          <div>
            <div
              style={{
                height: '100vh',
                background: `#828282 no-repeat 50% 50%/cover`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img style={{ width: 990, height: 750 }} src={slide4_pc} alt="modument_intro4" />
            </div>
          </div>

          <div>
            <div
              style={{
                height: '100vh',
                background: ` url(${slide5_pc}) no-repeat 50% 100%/cover `,
              }}
            />
          </div>
        </Slider>
        <Indicator />
      </SlickWrapper>
    </>
  );
}
export default IntroSlider;
