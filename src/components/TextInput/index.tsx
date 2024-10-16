import React, {useState} from 'react';
import {MaskInputProps} from 'react-native-mask-input';
import * as S from './styles';
import {Text} from '../Text';
import {Eye, EyeClosed} from 'phosphor-react-native';
import {THEME} from '../../styles/theme';

interface TextInputProps extends MaskInputProps {
  errorMessage?: string;
  backgroundColor?: keyof typeof THEME.COLORS;
  variant?: 'normal' | 'secure';
}

export function TextInput({
  errorMessage,
  variant = 'normal',
  backgroundColor = 'GRAY_7',
  onBlur,
  ...rest
}: TextInputProps) {
  const [showContent, setShowContent] = useState(!(variant === 'secure'));
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.TextInputContainer>
      <S.TextInputWrapper>
        <S.TextInput
          isFocused={isFocused}
          secureTextEntry={!showContent}
          onFocus={() => setIsFocused(true)}
          backgroundColor={backgroundColor}
          onBlur={e => {
            setIsFocused(false);

            if (typeof onBlur === 'function') {
              onBlur(e);
            }
          }}
          {...rest}
        />

        {variant === 'secure' && (
          <S.IconContainer onPress={() => setShowContent(!showContent)}>
            {showContent && <Eye color={THEME.COLORS.GRAY_3} size={28} />}
            {!showContent && (
              <EyeClosed color={THEME.COLORS.GRAY_3} size={28} />
            )}
          </S.IconContainer>
        )}
      </S.TextInputWrapper>

      {!!errorMessage && <Text color="RED_LIGHT">{errorMessage}</Text>}
    </S.TextInputContainer>
  );
}
