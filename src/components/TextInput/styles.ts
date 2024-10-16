import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';
import {THEME} from '../../styles/theme';

interface TextInputStyledProps {
  isFocused: boolean;
  backgroundColor: keyof typeof THEME.COLORS;
}

export const TextInputContainer = styled.View`
  gap: 8px;
`;

export const TextInputWrapper = styled.View`
  position: relative;
`;

export const TextInput = styled(MaskInput).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.GRAY_4,
}))<TextInputStyledProps>`
  width: 100%;
  min-height: ${({multiline}) => (multiline ? 160 : 45)}px;
  padding: 12px 16px;
  transition: 1s;

  background-color: ${({theme, backgroundColor, isFocused}) =>
    isFocused ? theme.COLORS.WHITE : theme.COLORS[backgroundColor]};
  border-width: ${({isFocused}) => (isFocused ? 1 : 0)}px;
  border-color: ${({theme}) => theme.COLORS.GRAY_3};
  color: ${({theme}) => theme.COLORS.GRAY_3};
  font-family: 'Karla';
  border-radius: 6px;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 22.5%;
  right: 16px;
`;
