import React, {useState} from 'react';
import {TextInputProps as BaseTextInputProps} from 'react-native';
import * as S from './styles';
import {Text} from '../Text';

interface TextInputProps extends BaseTextInputProps {
  errorMessage?: string;
}

export function TextInput({errorMessage, ...rest}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.TextInputContainer>
      <S.TextInput
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {errorMessage && (
        <Text color="RED_LIGHT">Ocorreu um erro, digite corretamente.</Text>
      )}
    </S.TextInputContainer>
  );
}
