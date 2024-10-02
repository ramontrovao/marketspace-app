import styled from 'styled-components/native';
import {Text} from '../../components/Text';

export const LoginContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const LogoTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const LogoTitle = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZES.XL};
  font-weight: 700;
  color: ${props => props.theme.COLORS.BLACK};
`;

export const LogoSubtitle = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZES.SM};
  color: ${props => props.theme.COLORS.GRAY_3};
`;
