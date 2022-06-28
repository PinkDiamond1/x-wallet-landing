import styled, { css } from 'styled-components/macro';
import useWindowSize from '../../hooks/useWindowSize';
import { theme } from '../../styles/theme';
import browserDetection from '../../utils/browserDetection';

export const FlexContainer = ({
  reference,
  className,
  desktopClassName,
  desktopPixel,
  tabletClassName,
  mobileClassName,
  tabletBreakpoint,
  children,
  desktopStyle,
  style,
  tabletStyle,
  mobileStyle,
  backgroundImage,
  ...rest
}) => {
  const [width] = useWindowSize();

  const getClassName = () => {
    let classname = className;
    if (width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopClassName) {
      classname = `${classname} ${desktopClassName} `;
    }
    if (width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletClassName) {
      classname = `${classname} ${tabletClassName} `;
    }
    if (width < theme.mediaQueries.mobilePixel && mobileClassName) {
      classname = `${classname} ${mobileClassName} `;
    }
    return classname;
  };
  return (
    <STYFlexContainer
      {...rest}
      ref={reference}
      className={getClassName()}
      backgroundImage={backgroundImage}
      style={{
        ...style,
        ...(width >= (desktopPixel || theme.mediaQueries.desktopPixel) && desktopStyle),
        ...(width < (desktopPixel || theme.mediaQueries.desktopPixel) && width >= theme.mediaQueries.mobilePixel && tabletStyle),
        ...(width < theme.mediaQueries.mobilePixel && mobileStyle),
      }}
    >
      {children}
    </STYFlexContainer>
  );
};

export const STYFlexContainer = styled.div`
  display: flex;
  &.f-wrap {
    flex-wrap: wrap;

    ${({ gap }) => {
      if (gap) {
        const browser = browserDetection();

        if (browser === 'SAFARI') {
          return css`
            & > *:not(:last-child) {
              margin-bottom: ${gap}px;
            }
          `;
        }
      }
    }}
  }

  &.h-fit-content {
    height: fit-content;
  }

  ${({ backgroundImage }) => {
    if (backgroundImage) {
      return css`
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url(${backgroundImage});
      `;
    }
  }}

  ${({ gap }) => {
    if (gap) {
      const browser = browserDetection();

      if (browser === 'SAFARI') {
        return css`
          & > *:not(:last-child) {
            margin-right: ${gap}px;
          }
        `;
      } else
        return css`
          column-gap: ${({ gap }) => gap}px;
        `;
    }
  }}

  &.column {
    flex-direction: column;
    ${({ gap }) => {
      if (gap) {
        const browser = browserDetection();

        if (browser === 'SAFARI') {
          return css`
            & > *:not(:last-child) {
              margin-bottom: ${gap}px;
              margin-right: 0px;
            }
          `;
        } else
          return css`
            row-gap: ${({ gap }) => gap}px;
            column-gap: 0px;
          `;
      }
    }}
  }

  &.column-reverse {
    flex-direction: column-reverse;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.grid {
    display: grid;
    grid-template-columns: ${({ columns, px }) => `repeat(${columns}, ${px ? `${px}px` : '1fr'})`};
    row-gap: 30px;
    column-gap: ${({ gridColumnGap = 30 }) => gridColumnGap}px;
  }

  &.x-auto {
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
`;
