import React from 'react';
import styled from 'styled-components/macro';
import { StripesIcon } from '../../assets';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../styles/theme';

const STYStripesContainer = styled.div`
  position: absolute;
  bottom: 1px;
  left: 0;
  line-height: 0;
`;

const Stripes = ({ desktopPixel, iconStyle, desktopIconStyle, tabletIconStyle, mobileIconStyle }) => {
  const [width] = useWindowSize();
  return (
    <STYStripesContainer>
      <StripesIcon
        style={{
          ...iconStyle,
          ...(width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopIconStyle),
          ...(width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletIconStyle),
          ...(width < theme.mediaQueries.mobilePixel && mobileIconStyle),
        }}
      />
    </STYStripesContainer>
  );
};

export default Stripes;
