import React, {useState} from 'react';
import * as S from './styles';
import {ScrollView, StatusBar, Switch, TouchableOpacity} from 'react-native';
import {THEME} from '../../styles/theme';
import {ArrowLeft} from 'phosphor-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TStackParamList} from '../../types/navigation';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {Checkbox, RadioButton} from 'react-native-paper';

export function CreateProductScreen({
  navigation,
}: NativeStackScreenProps<TStackParamList>) {
  const [productType, setProductType] = useState('used');
  const [acceptTrade, setAcceptTrade] = useState(false);

  function onPressBackButton() {
    navigation.goBack();
  }

  function toggleTradeSwitch() {
    setAcceptTrade(!acceptTrade);
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

              <TextInput
                backgroundColor="WHITE"
                placeholder="Título do anúncio"
              />
              <TextInput
                backgroundColor="WHITE"
                multiline
                placeholder="Descrição do produto"
              />

              <RadioButton.Group
                onValueChange={newValue => setProductType(newValue)}
                value={productType}>
                <S.RadioContainer>
                  <S.RadioContainer onPress={() => setProductType('new')}>
                    <RadioButton.Android
                      color={THEME.COLORS.BLUE_LIGHT}
                      value="new"
                    />
                    <Text>Produto novo</Text>
                  </S.RadioContainer>

                  <S.RadioContainer onPress={() => setProductType('used')}>
                    <RadioButton.Android
                      color={THEME.COLORS.BLUE_LIGHT}
                      value="used"
                    />
                    <Text>Produto usado</Text>
                  </S.RadioContainer>
                </S.RadioContainer>
              </RadioButton.Group>
            </S.FormField>

            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Venda
              </Text>

              <TextInput
                backgroundColor="WHITE"
                keyboardType="numeric"
                placeholder="Valor do produto"
              />
            </S.FormField>

            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Aceita troca?
              </Text>

              <Switch
                trackColor={{true: THEME.COLORS.BLUE_LIGHT}}
                value={acceptTrade}
                onValueChange={toggleTradeSwitch}
              />
            </S.FormField>

            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Meios de pagamento aceitos
              </Text>

              <S.RadioContainer>
                <Checkbox.Android
                  status="unchecked"
                  color={THEME.COLORS.BLUE_LIGHT}
                />
                <Text>Produto novo</Text>
              </S.RadioContainer>
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
