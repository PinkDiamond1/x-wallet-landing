import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

import { FlexContainer } from '../shared/Container';
import { CloseQuoteIcon, OpenQuoteIcon } from '../../assets';
import Label from '../shared/Label';
import useWindowSize from '../../hooks/useWindowSize';

const CarouselContainer = styled(FlexContainer)`
  @media (min-width: 1500px) {
    padding: 120px 174px 0px;
  }
  .swiper-wrapper {
  }
  .swiper-container {
    width: 100%;
    max-width: ${({ width }) => width}px;
    height: min-content;
    overflow: hidden;
    @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
      margin: 0px;
    }
  }
  .swiper-slide {
    width: 100%;
    height: min-content;
  }

  .swiper-pagination {
    bottom: 10px;
  }
`;

const ReviewCarousel = () => {
  // in order to active the autoplay functionality
  SwiperCore.use([Autoplay]);

  const [width] = useWindowSize();
  const params = {
    initialSlide: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      loop: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 1,
  };

  const getSize = (mobile, tablet, desktop, monitor) => {
    if (width < 880) return mobile;
    else if (width > 880 && width < 1024) return tablet;
    else if (width > 1024 && width < 1500) return desktop;
    else return monitor;
  };

  const Review = ({ children }) => (
    <FlexContainer gap={getSize(20, 20, 40, 40)} className="column w-100 swiper-slide justify-ce align-ce ">
      <OpenQuoteIcon className="self-align-start" height={getSize(32, 32, 78, 78)} width={getSize(32, 32, 78, 78)} />
      <Label style={{ opacity: 0.2 }} size="medium" fontFamily="syncopate" labelStyle>
        {children}
      </Label>
      <CloseQuoteIcon className="self-align-end" height={getSize(32, 32, 78, 78)} width={getSize(32, 32, 78, 78)} />
    </FlexContainer>
  );

  return (
    <CarouselContainer
      mobileStyle={{ padding: '80px 16px 0px' }}
      tabletStyle={{ padding: '80px 16px 0px' }}
      desktopStyle={{ padding: '120px 90px 0px' }}
      width={width - getSize(64, 64, 180, 240)}
    >
      <Swiper {...params}>
        <Review>
          IT HAS A VERY SIMPLE AND NICE DESIGN. IT IS VERY EASY TO USE AND DESIGNED IN A WAY THAT ANYONE CAN USE IT. THE FACT THAT IT IS THE OFFICIAL
          WALLET OF THE KADENA NETWORK IS ANOTHER BEAUTY.
        </Review>
        <Review>
          This wallet is built by Kaddex team who are also building Kaddex - a multi-chain DEX on Kadena. Currently I am using this wallet to store my
          KDX tokens purchased in First token sale of Kaddex.
        </Review>
        <Review>Super user friendly. Well done KDX team</Review>
        <Review>Amazing this is going to be the go to decentralized wallet for Kadena and its entire ecosystem</Review>
      </Swiper>
    </CarouselContainer>
  );
};

export default ReviewCarousel;
