import React from 'react';
import * as S from './styles';
import {StatusBar} from 'react-native';
import {THEME} from '../../styles/theme';
import {Text} from '../../components/Text';

export function ProductListingScreen() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GRAY_6}
        barStyle="dark-content"
      />

      <S.ProductListingContainer>
        <Text>ProductListing</Text>
      </S.ProductListingContainer>
    </>
  );
}
