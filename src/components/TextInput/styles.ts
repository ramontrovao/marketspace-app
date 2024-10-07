import styled from 'styled-components/native';

interface TextInputStyledProps {
  isFocused: boolean;
}

export const TextInputContainer = styled.View`
  gap: 8px;
`;

export const TextInputWrapper = styled.View`
  position: relative;
`;

export const TextInput = styled.TextInput<TextInputStyledProps>`
  width: 100%;
  min-height: 45px;
  padding: 12px 16px;
  transition: 1s;

  background-color: ${({theme, isFocused}) =>
    isFocused ? theme.COLORS.WHITE : theme.COLORS.GRAY_7};
  border-width: ${({isFocused}) => (isFocused ? 1 : 0)}px;
  border-color: ${({theme}) => theme.COLORS.GRAY_3};
  color: ${({theme}) => theme.COLORS.GRAY_4};
  font-family: 'Karla';
  border-radius: 6px;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 22.5%;
  right: 16px;
`;
