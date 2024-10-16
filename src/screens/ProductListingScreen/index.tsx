import React from 'react';
import * as S from './styles';
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/theme';
import {Plus} from 'phosphor-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TStackParamList} from '../../types/navigation';

export function ProductListingScreen({
  navigation,
}: NativeStackScreenProps<TStackParamList>) {
  function onPressCreateProductButton() {
    navigation.navigate('CreateProduct');
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GRAY_6}
        barStyle="dark-content"
      />

      <S.ProductListingContainer>
        <ScrollView>
          <S.ProductListingHeader>
            <S.ProductListingTitle fontWeight="BOLD">
              Meus anúncios
            </S.ProductListingTitle>

            <TouchableOpacity onPress={onPressCreateProductButton}>
              <Plus size={24} />
            </TouchableOpacity>
          </S.ProductListingHeader>
        </ScrollView>
      </S.ProductListingContainer>
    </>
  );
}
