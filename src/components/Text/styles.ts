import styled from 'styled-components/native';
import {THEME} from '../../styles/theme';

interface TextStyledProps {
  color: keyof typeof THEME.COLORS;
  fontWeight: keyof typeof THEME.FONT_WEIGHTS;
}

export const Text = styled.Text<TextStyledProps>`
  font-family: 'Karla';
  font-weight: ${({theme, fontWeight}) => theme.FONT_WEIGHTS[fontWeight]};
  color: ${({color, theme}) => theme.COLORS[color]};
`;
