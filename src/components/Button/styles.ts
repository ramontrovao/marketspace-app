import styled from 'styled-components/native';
import {BUTTON_VARIANTS} from '../../constants/variants/button';

interface TouchableOpacityStyledProps {
  variant: keyof typeof BUTTON_VARIANTS;
}

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityStyledProps>`
  background-color: ${({theme, variant}) =>
    theme.COLORS[BUTTON_VARIANTS[variant].backgroundColor]};
  padding: 16px;
  width: 100%;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
