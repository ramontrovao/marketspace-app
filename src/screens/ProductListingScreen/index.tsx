import React from 'react';
import * as S from './styles';
import {StatusBar, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/theme';
import {Plus} from 'phosphor-react-native';

export function ProductListingScreen() {
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

          <TouchableOpacity>
            <Plus size={24} />
          </TouchableOpacity>
        </S.ProductListingHeader>
      </S.ProductListingContainer>
    </>
  );
}
