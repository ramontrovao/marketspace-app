import React from 'react';
import {House, SignOut, Tag} from 'phosphor-react-native';
import {Alert} from 'react-native';
import {THEME} from '../../styles/theme';
import * as S from './styles';

interface TabNavigatorIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export function LogoutButton() {
  return (
    <S.LogoutButtonContainer
      onPress={() => {
        Alert.alert('Encerrar sessão', 'Deseja encerrar sua sessão?', [
          {
            text: 'Não',
            onPress: () => console.log('Cancel Pressed'),
          },
          {text: 'Sim', onPress: () => console.log('OK Pressed')},
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
