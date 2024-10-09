import React from 'react';
import {House, SignOut, Tag} from 'phosphor-react-native';
import {Alert} from 'react-native';
import {THEME} from '../../styles/theme';
import * as S from './styles';
import {useAuthentication} from '../../contexts/AuthenticationContext';

interface TabNavigatorIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export function LogoutButton() {
  const {logout} = useAuthentication();

  return (
    <S.LogoutButtonContainer
      onPress={() => {
        Alert.alert('Encerrar sessão', 'Deseja encerrar sua sessão?', [
          {
            text: 'Não',
          },
          {text: 'Sim', onPress: () => logout()},
        ]);
      }}>
      <SignOut color={THEME.COLORS.RED_LIGHT} size={24} />
    </S.LogoutButtonContainer>
  );
}

export function HouseIcon({focused}: TabNavigatorIconProps) {
  return (
    <House
      color={focused ? THEME.COLORS.GRAY_2 : THEME.COLORS.GRAY_4}
      weight={focused ? 'bold' : 'regular'}
      size={24}
    />
  );
}

export function ProductListingIcon({focused}: TabNavigatorIconProps) {
  return (
    <Tag
      color={focused ? THEME.COLORS.GRAY_2 : THEME.COLORS.GRAY_4}
      weight={focused ? 'bold' : 'regular'}
      size={24}
    />
  );
}
