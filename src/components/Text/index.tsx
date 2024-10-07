import React, {ReactNode} from 'react';
import {TextProps as BaseTextProps} from 'react-native';
import {THEME} from '../../styles/theme';
import * as S from './styles';

interface TextProps extends Omit<BaseTextProps, 'color'> {
  color?: keyof typeof THEME.COLORS;
  fontWeight?: keyof typeof THEME.FONT_WEIGHTS;
  children: ReactNode;
}

export function Text({
  children,
  fontWeight = 'REGULAR',
  color = 'BLACK',
  ...rest
}: TextProps) {
  return (
    <S.Text fontWeight={fontWeight} color={color} {...rest}>
      {children}
    </S.Text>
  );
}
