import React, {useState} from 'react';
import {TextInputProps as BaseTextInputProps} from 'react-native';
import * as S from './styles';
import {Text} from '../Text';

interface TextInputProps extends BaseTextInputProps {
  errorMessage?: string;
}

export function TextInput({errorMessage, onBlur, ...rest}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.TextInputContainer>
      <S.TextInput
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={e => {
          setIsFocused(false);

          if (typeof onBlur === 'function') {
            onBlur(e);
          }
        }}
        {...rest}
      />

      {!!errorMessage && <Text color="RED_LIGHT">{errorMessage}</Text>}
    </S.TextInputContainer>
  );
}
