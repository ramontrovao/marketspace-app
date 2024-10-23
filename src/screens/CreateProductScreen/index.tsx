import React, {useState} from 'react';
import * as S from './styles';
import {
  ScrollView,
  StatusBar,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import {THEME} from '../../styles/theme';
import {ArrowLeft, Plus, X} from 'phosphor-react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TStackParamList} from '../../types/navigation';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {Checkbox, RadioButton} from 'react-native-paper';
import ImageCropPicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {z} from 'zod';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

const PAYMENT_METHODS = [
  'Boleto',
  'Pix',
  'Dinheiro',
  'Cartão de Crédito',
  'Depósito Bancário',
];

const createProductSchema = z.object({
  name: z
    .string({message: 'Este campo é obrigatório.'})
    .min(5, 'Seu título deve conter ao menos 5 caracteres.'),
  description: z
    .string({message: 'Este campo é obrigatório.'})
    .min(5, 'Digite um título válido.'),
  is_new: z.boolean({message: 'Este campo é obrigatório.'}).default(false),
  price: z
    .string({message: 'Este campo é obrigatório.'})
    .min(1, 'Digite um valor válido.'),
  accept_trade: z
    .boolean({message: 'Este campo é obrigatório.'})
    .default(false),
  payment_methods: z
    .array(z.string())
    .refine(value => value.length < 1, {message: 'Escolha ao menos 1 opção.'}),
});

type TCreateProductSchema = z.infer<typeof createProductSchema>;

export function CreateProductScreen({
  navigation,
}: NativeStackScreenProps<TStackParamList>) {
  const [productImages, setProductImages] = useState<ImageOrVideo[]>([]);

  const {control, handleSubmit, setValue, watch, getFieldState} =
    useForm<TCreateProductSchema>({
      resolver: zodResolver(createProductSchema),
    });

  const isNew = watch('is_new');
  const paymentMethodsAccepted = watch('payment_methods') ?? [];
  const {error: paymentMethodsAcceptedError} = getFieldState('payment_methods');

  function onPressBackButton() {
    navigation.goBack();
  }

  function changeCheckboxesValue(value: string) {
    if (paymentMethodsAccepted.includes(value)) {
      const paymentMethodsUpdated = paymentMethodsAccepted.filter(
        paymentMethod => paymentMethod !== value,
      );

      setValue('payment_methods', paymentMethodsUpdated);
      return;
    }

    setValue('payment_methods', [...paymentMethodsAccepted, value]);
  }

  async function onAddImage() {
    const image = await ImageCropPicker.openPicker({
      width: 2048,
      height: 2048,
      forceJpg: true,
      cropping: true,
    });

    setProductImages(images => [...images, image]);
  }

  async function onRemoveImage(imagePath: string) {
    const productImagesUpdated = productImages.filter(
      image => image.path !== imagePath,
    );

    setProductImages(productImagesUpdated);
  }

  function onSubmit(data) {
    console.log(data);
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

              <View>
                <Text color="GRAY_3" fontSize={14}>
                  Escolha até 3 imagens para mostrar o quanto o seu produto é
                  incrível!
                </Text>

                <Text style={{marginTop: 4}} fontSize={14} color="RED_LIGHT">
                  OBS: Você precisa escolher ao menos uma imagem.
                </Text>
              </View>

              <S.ImagesContainer>
                {productImages.map(image => (
                  <TouchableOpacity onPress={() => onRemoveImage(image.path)}>
                    <S.RemoveImageContainer>
                      <X color={THEME.COLORS.WHITE} size={12} />
                    </S.RemoveImageContainer>

                    <S.ImageContainer source={{uri: image.path}} />
                  </TouchableOpacity>
                ))}

                {productImages.length < 3 && (
                  <S.AddImageButton onPress={onAddImage}>
                    <Plus color={THEME.COLORS.GRAY_4} size={24} />
                  </S.AddImageButton>
                )}
              </S.ImagesContainer>
            </S.FormField>

            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Sobre o produto
              </Text>

              <Controller
                control={control}
                name="name"
                render={({
                  fieldState: {error},
                  field: {onChange, onBlur, value},
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                    backgroundColor="WHITE"
                    placeholder="Título do anúncio"
                  />
                )}
              />

              <Controller
                control={control}
                name="description"
                render={({
                  fieldState: {error},
                  field: {onChange, onBlur, value},
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                    backgroundColor="WHITE"
                    multiline
                    textAlignVertical="top"
                    placeholder="Descrição do produto"
                  />
                )}
              />

              <RadioButton.Group
                onValueChange={newValue =>
                  setValue('is_new', newValue === 'new')
                }
                value={isNew ? 'new' : 'used'}>
                <S.RadioContainer>
                  <S.RadioContainer onPress={() => setValue('is_new', true)}>
                    <RadioButton.Android
                      color={THEME.COLORS.BLUE_LIGHT}
                      value="new"
                    />
                    <Text>Produto novo</Text>
                  </S.RadioContainer>

                  <S.RadioContainer onPress={() => setValue('is_new', false)}>
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

              <Controller
                control={control}
                name="price"
                render={({
                  fieldState: {error},
                  field: {onChange, onBlur, value},
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                    backgroundColor="WHITE"
                    keyboardType="numeric"
                    placeholder="Valor do produto"
                  />
                )}
              />
            </S.FormField>

            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Aceita troca?
              </Text>

              <Controller
                control={control}
                name="accept_trade"
                render={({field: {onChange, value}}) => (
                  <Switch
                    trackColor={{true: THEME.COLORS.BLUE_LIGHT}}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            </S.FormField>

            <S.FormField>
              <Text color="GRAY_2" fontWeight="BOLD">
                Meios de pagamento aceitos
              </Text>

              <S.CheckboxesContainer>
                {PAYMENT_METHODS.map(paymentMethod => (
                  <S.RadioContainer
                    key={paymentMethod}
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

              {!!paymentMethodsAcceptedError?.message && (
                <Text color="RED_LIGHT">
                  {paymentMethodsAcceptedError.message}
                </Text>
              )}
            </S.FormField>
          </S.FormContainer>
        </ScrollView>

        <S.FooterContainer>
          <Button variant="tertiary">Cancelar</Button>
          <Button onPress={handleSubmit(onSubmit)} variant="secondary">
            Avançar
          </Button>
        </S.FooterContainer>
      </S.CreateProductContainer>
    </>
  );
}
