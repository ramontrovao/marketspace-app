import styled from 'styled-components/native';
import {BUTTON_VARIANTS} from '../../constants/variants/button';

interface TouchableOpacityStyledProps {
  variant: keyof typeof BUTTON_VARIANTS;
}

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityStyledProps>`
  width: 100%;
  height: 100%;
  min-height: 52px;
  max-height: 52px;
  padding: 16px;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({theme, variant}) =>
    theme.COLORS[BUTTON_VARIANTS[variant].backgroundColor]};
  border-radius: 8px;
`;
