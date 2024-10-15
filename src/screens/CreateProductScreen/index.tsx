import React from 'react';
import * as S from './styles';
import {StatusBar, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/theme';
import {ArrowLeft} from 'phosphor-react-native';

export function CreateProductScreen({navigation}) {
  function onPressBackButton() {
    navigation.goBack();
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GRAY_6}
        barStyle="dark-content"
      />

      <S.CreateProductContainer>
        <S.CreateProductHeader>
          <TouchableOpacity onPress={onPressBackButton}>
            <ArrowLeft size={24} />
          </TouchableOpacity>

          <S.CreateProductTitle fontWeight="BOLD">
            Criar anúncio
          </S.CreateProductTitle>
        </S.CreateProductHeader>
      </S.CreateProductContainer>
    </>
  );
}
