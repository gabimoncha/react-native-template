import React, { PropsWithChildren } from 'react';
import { useColorScheme, Text, TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { space, SpaceProps, layout, LayoutProps, compose, typography, TypographyProps } from 'styled-system';
import { BLACK, WHITE } from 'utils/colors';

interface StyleProps extends SpaceProps, TypographyProps, LayoutProps, TextProps {
  flex?: number | string;
  color?: string;
  capitalize?: boolean;
  underline?: boolean;
  debug?: boolean;
  opacity?: number;
}

const Container = styled(Text)<StyleProps>`
  ${compose(space, layout, typography)}
  opacity: ${({ opacity }) => opacity};
  ${({ debug }) =>
    debug
      ? css`
          border: 1px solid red;
        `
      : css``};
  text-align-vertical: center;
  text-decoration-line: ${({ underline }) => (underline ? 'underline' : 'none')};
  color: ${({ color }) => color};
  ${({ capitalize }) =>
    capitalize
      ? css`
          text-transform: capitalize;
        `
      : ''}
`;

Container.defaultProps = {
  fontSize: 18,
  fontWeight: '600',
  capitalize: false,
  textAlign: 'left',
  underline: false,
  opacity: 1,
};

const CustomText = ({ children, ...props }: PropsWithChildren<StyleProps>) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Container color={isDarkMode ? WHITE : BLACK} {...props}>
      {children}
    </Container>
  );
};

export default CustomText;
