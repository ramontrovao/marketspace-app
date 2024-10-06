import * as S from './styles';
import React, {ReactNode} from 'react';
import {TouchableOpacityProps as BaseTouchableOpacityProps} from 'react-native';
import {Text} from '../Text';
import {BUTTON_VARIANTS} from '../../constants/variants/button';

interface TouchableOpacityProps extends BaseTouchableOpacityProps {
  variant?: keyof typeof BUTTON_VARIANTS;
  children: ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  ...rest
}: TouchableOpacityProps) {
  return (
    <S.TouchableOpacity variant={variant} {...rest}>
      <Text color={BUTTON_VARIANTS[variant].textColor}>{children}</Text>
    </S.TouchableOpacity>
  );
}
