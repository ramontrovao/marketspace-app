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

const PAYMENT_METHODS = [
  'Boleto',
  'Pix',
  'Dinheiro',
  'Cartão de Crédito',
  'Depósito Bancário',
];

export function CreateProductScreen({
  navigation,
}: NativeStackScreenProps<TStackParamList>) {
  const [paymentMethodsAccepted, setPaymentMethodsAccepted] = useState<
    string[]
  >([]);
  const [productType, setProductType] = useState('used');
  const [acceptTrade, setAcceptTrade] = useState(false);

  function onPressBackButton() {
    navigation.goBack();
  }

  function toggleTradeSwitch() {
    setAcceptTrade(!acceptTrade);
  }

  function changeCheckboxesValue(value: string) {
    if (paymentMethodsAccepted.includes(value)) {
      const paymentMethodsUpdated = paymentMethodsAccepted.filter(
        p => p !== value,
      );

      setPaymentMethodsAccepted(paymentMethodsUpdated);
      return;
    }

    setPaymentMethodsAccepted(arr => [...arr, value]);
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
            flexGrow: 1,
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
                textAlignVertical="top"
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

              <S.CheckboxesContainer>
                {PAYMENT_METHODS.map(paymentMethod => (
                  <S.RadioContainer
                    onPress={() => changeCheckboxesValue(paymentMethod)}>
                    <Checkbox.Android
                      onPress={() => changeCheckboxesValue(paymentMethod)}
                      status={
                        paymentMethodsAccepted.includes(paymentMethod)
                          ? 'checked'
                          : 'unchecked'
                      }
                      color={THEME.COLORS.BLUE_LIGHT}
                    />
                    <Text>{paymentMethod}</Text>
                  </S.RadioContainer>
                ))}
              </S.CheckboxesContainer>
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
