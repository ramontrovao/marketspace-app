import styled from 'styled-components/native';
import {Text} from '../../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';

export const LoginContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`;

export const TopWrapper = styled.View`
  padding-top: 48px;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_6};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const LogoTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const LogoTitle = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZES.XL};
  font-weight: 700;
  color: ${props => props.theme.COLORS.BLACK};
`;

export const LogoSubtitle = styled(Text)`
  font-weight: ${({theme}) => theme.FONT_WEIGHTS.LIGHT};
  font-size: ${({theme}) => theme.FONT_SIZES.SM};
  color: ${props => props.theme.COLORS.GRAY_3};
`;

export const LoginTitle = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZES.SM};
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 48px;
  gap: 18px;
`;

export const BottomWrapper = styled.View`
  padding: 32px 48px;

  flex: 0.25;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`;

export const SignUpTitle = styled(Text)`
  font-size: 14px;
`;
