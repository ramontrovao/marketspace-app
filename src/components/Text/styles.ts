import styled from 'styled-components/native';
import {THEME} from '../../styles/theme';

interface TextStyledProps {
  color: keyof typeof THEME.COLORS;
}

export const Text = styled.Text<TextStyledProps>`
  font-family: 'Karla';
  color: ${({color, theme}) => theme.COLORS[color]};
`;
