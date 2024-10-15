import * as S from './styles';
import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  TouchableOpacityProps as BaseTouchableOpacityProps,
} from 'react-native';
import {Text} from '../Text';
import {BUTTON_VARIANTS} from '../../constants/variants/button';
import {THEME} from '../../styles/theme';

interface TouchableOpacityProps extends BaseTouchableOpacityProps {
  variant?: keyof typeof BUTTON_VARIANTS;
  fontWeight?: keyof typeof THEME.FONT_WEIGHTS;
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({
  children,
  isLoading = false,
  variant = 'primary',
  fontWeight = 'REGULAR',
  ...rest
}: TouchableOpacityProps) {
  return (
    <S.TouchableOpacity variant={variant} {...rest}>
      {isLoading && (
        <ActivityIndicator
          color={BUTTON_VARIANTS[variant].textColor}
          size={12}
        />
      )}

      {!isLoading && (
        <Text
          fontWeight={fontWeight}
          color={BUTTON_VARIANTS[variant].textColor}>
          {children}
        </Text>
      )}
    </S.TouchableOpacity>
  );
}
