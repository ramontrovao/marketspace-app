import React from 'react';
import * as S from './styles';
import {StatusBar, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/theme';
import {Plus} from 'phosphor-react-native';

export function ProductListingScreen({navigation}) {
  function onPressCreateProductButton() {
    navigation.navigate('CreateProductScreen');
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GRAY_6}
        barStyle="dark-content"
      />

      <S.ProductListingContainer>
        <S.ProductListingHeader>
          <S.ProductListingTitle fontWeight="BOLD">
            Meus anúncios
          </S.ProductListingTitle>

          <TouchableOpacity onPress={onPressCreateProductButton}>
            <Plus size={24} />
          </TouchableOpacity>
        </S.ProductListingHeader>
      </S.ProductListingContainer>
    </>
  );
}
