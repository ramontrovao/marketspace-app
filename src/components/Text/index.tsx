import React, {ReactNode} from 'react';
import {TextProps as BaseTextProps} from 'react-native';
import {THEME} from '../../styles/theme';
import * as S from './styles';

interface TextProps extends Omit<BaseTextProps, 'color'> {
  color?: keyof typeof THEME.COLORS;
  fontWeight?: keyof typeof THEME.FONT_WEIGHTS;
  fontSize?: number;
  children: ReactNode;
}

export function Text({
  children,
  fontWeight = 'REGULAR',
  fontSize = 16,
  color = 'BLACK',
  ...rest
}: TextProps) {
  return (
    <S.Text fontSize={fontSize} fontWeight={fontWeight} color={color} {...rest}>
      {children}
    </S.Text>
  );
}
