import styled from 'styled-components/native';

interface TextInputStyledProps {
  isFocused: boolean;
}

export const TextInput = styled.TextInput<TextInputStyledProps>`
  width: 100%;
  min-height: 45px;
  padding: 12px 16px;

  background-color: ${({theme, isFocused}) =>
    isFocused ? theme.COLORS.WHITE : theme.COLORS.GRAY_7};
  border-width: ${({isFocused}) => (isFocused ? 1 : 0)}px;
  border-color: ${({theme}) => theme.COLORS.GRAY_3};
  color: ${({theme}) => theme.COLORS.GRAY_4};
  font-family: 'Karla';
  border-radius: 6px;
`;
