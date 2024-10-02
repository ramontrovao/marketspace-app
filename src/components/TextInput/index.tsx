import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import * as S from './styles';

export function TextInput(props: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.TextInput
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
}
