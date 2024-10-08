import React from 'react';
import * as S from './styles';
import {ArrowLeft} from 'phosphor-react-native';
import {Logo} from '../../assets/svg/Logo';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

export function BackHeader() {
  const navigate = useNavigation();

  return (
    <S.BackHeaderContainer>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <ArrowLeft size={24} />
      </TouchableOpacity>

      <Logo width={50} height={30} />
    </S.BackHeaderContainer>
  );
}
