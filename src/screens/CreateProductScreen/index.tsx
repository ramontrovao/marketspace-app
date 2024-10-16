import React from 'react';
import * as S from './styles';
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/theme';
import {ArrowLeft} from 'phosphor-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TStackParamList} from '../../types/navigation';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';

export function CreateProductScreen({
  navigation,
}: NativeStackScreenProps<TStackParamList>) {
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
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            padding: 24,
            backgroundColor: THEME.COLORS.GRAY_7,
          }}>
          <S.CreateProductHeader>
            <TouchableOpacity onPress={onPressBackButton}>
              <ArrowLeft size={24} />
            </TouchableOpacity>

            <S.CreateProductTitle fontWeight="BOLD">
              Criar anúncio
            </S.CreateProductTitle>
          </S.CreateProductHeader>

          <S.FormContainer>
            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Imagens
              </Text>

              <Text color="GRAY_3" fontSize={14}>
                Escolha até 3 imagens para mostrar o quando o seu produto é
                incrível!
              </Text>
            </S.FormField>

            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Sobre o produto
              </Text>

              <TextInput placeholder="Título do anúncio" />
              <TextInput multiline placeholder="Descrição do produto" />
            </S.FormField>
          </S.FormContainer>
        </ScrollView>

        <S.FooterContainer>
          <Button variant="tertiary">Cancelar</Button>
          <Button variant="secondary">Avançar</Button>
        </S.FooterContainer>
      </S.CreateProductContainer>
    </>
  );
}
