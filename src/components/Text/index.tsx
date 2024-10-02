import React, {ReactNode} from 'react';
import {TextProps as BaseTextProps} from 'react-native';
import * as S from './styles';

interface TextProps extends BaseTextProps {
  children: ReactNode;
}

export function Text({children, ...rest}: TextProps) {
  return <S.Text {...rest}>{children}</S.Text>;
}
