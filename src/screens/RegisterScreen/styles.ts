import styled from 'styled-components/native';
import {Text} from '../../components/Text';
import {SafeAreaView} from 'react-native-safe-area-context';

export const RegisterContainer = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  flex: 1;
`;

export const TopWrapper = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_6};
`;

export const LogoContainer = styled.View`
  padding: 0 48px;
  margin-top: 24px;

  gap: 8px;
`;

export const ProfileTouchable = styled.TouchableOpacity`
  position: relative;
  max-width: 100;

  align-self: center;
`;

export const SelectProfileImageContainer = styled.View`
  width: 88px;
  height: 88px;

  align-self: center;
  justify-content: center;
  align-items: center;

  border-radius: 999px;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.theme.COLORS.BLUE_LIGHT};
  background-color: ${props => props.theme.COLORS.GRAY_5};
`;

export const ProfileImageContainer = styled.Image`
  width: 88px;
  height: 88px;

  align-self: center;

  border-radius: 999px;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.theme.COLORS.BLUE_LIGHT};
`;

export const ProfileImagePencilContainer = styled.View`
  position: absolute;
  right: -10px;
  bottom: 0;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: ${props => props.theme.COLORS.BLUE_LIGHT};
  border-radius: 999px;
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
  text-align: center;
`;

export const RegisterTitle = styled(Text)`
  font-size: ${({theme}) => theme.FONT_SIZES.SM};
`;

export const FormContainer = styled.View`
  width: 100%;
  padding: 48px;
  gap: 18px;
`;

export const BottomWrapper = styled.View`
  padding: 48px;

  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 0.2;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const SignUpTitle = styled(Text)`
  font-size: 14px;
  margin-bottom: 16px;
`;
