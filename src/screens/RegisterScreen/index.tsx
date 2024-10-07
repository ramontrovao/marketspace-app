import React from 'react';
import * as S from './styles';
import {Logo} from '../../assets/svg/Logo';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {Controller, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {ScrollView, StatusBar} from 'react-native';
import {Masks, formatWithMask} from 'react-native-mask-input';
import {THEME} from '../../styles/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TStackParamList} from '../../types/navigation';

export function RegisterScreen({
  navigation,
}: NativeStackScreenProps<TStackParamList>) {
  const registerFormSchema = z
    .object({
      name: z
        .string({message: 'Este campo é obrigatório.'})
        .min(1, 'Digite um nome válido.'),
      email: z
        .string({message: 'Este campo é obrigatório.'})
        .min(1, 'Este campo é obrigatório.')
        .email('Digite um e-mail válido.'),
      phone: z
        .string({message: 'Este campo é obrigatório.'})
        .regex(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/, {
          message: 'Digite um telefone válido.',
        }),
      password: z
        .string({message: 'Este campo é obrigatório.'})
        .min(8, 'Sua senha deve conter ao menos 8 caracteres.')
        .regex(/.*[a-zA-Z].*/, 'Sua senha deve conter ao menos 1 letra.')
        .regex(/(?=.*\d)/, 'Sua senha deve conter ao menos 1 número.'),
      confirm_password: z
        .string({message: 'Este campo é obrigatório.'})
        .min(1, 'Este campo é obrigatório.'),
    })
    .superRefine(({confirm_password, password}, context) => {
      if (confirm_password !== password) {
        context.addIssue({
          code: 'custom',
          message: 'As senhas não coincidem.',
          fatal: true,
          path: ['confirm_password'],
        });
      }
    });

  type TRegisterFormSchema = z.infer<typeof registerFormSchema>;

  function onSubmit({phone, ...rest}: TRegisterFormSchema) {
    const {unmasked: unmaskedPhone} = formatWithMask({
      text: phone,
      mask: Masks.BRL_PHONE,
    });
    const data = {...rest, phone: unmaskedPhone};

    console.log(data);
  }

  const {control, handleSubmit} = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    reValidateMode: 'onChange',
  });

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GRAY_6}
        barStyle="dark-content"
      />

      <S.RegisterContainer>
        <ScrollView>
          <S.TopWrapper>
            <S.LogoContainer>
              <Logo width={60} height={40} />

              <S.LogoTitleContainer>
                <S.LogoTitle>Boas vindas!</S.LogoTitle>
                <S.LogoSubtitle>
                  Crie sua conta e use o espaço para comprar itens variados e
                  vender seus produtos
                </S.LogoSubtitle>
              </S.LogoTitleContainer>
            </S.LogoContainer>

            <S.FormContainer>
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
                    placeholder="Nome"
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                render={({
                  fieldState: {error},
                  field: {onChange, onBlur, value},
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                    placeholder="E-mail"
                  />
                )}
              />
              <Controller
                control={control}
                name="phone"
                render={({
                  fieldState: {error},
                  field: {onChange, onBlur, value},
                }) => (
                  <TextInput
                    mask={Masks.BRL_PHONE}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                    placeholder="Telefone"
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({
                  fieldState: {error},
                  field: {onChange, onBlur, value},
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                    variant="secure"
                    placeholder="Senha"
                  />
                )}
              />
              <Controller
                control={control}
                name="confirm_password"
                render={({
                  fieldState: {error},
                  field: {onChange, onBlur, value},
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    errorMessage={error?.message}
                    variant="secure"
                    placeholder="Confirmar senha"
                  />
                )}
              />

              <Button
                variant="secondary"
                onPress={handleSubmit(onSubmit)}
                fontWeight="BOLD">
                Criar
              </Button>
            </S.FormContainer>
          </S.TopWrapper>

          <S.BottomWrapper>
            <S.SignUpTitle>Já tem uma conta?</S.SignUpTitle>

            <Button
              onPress={() => navigation.navigate('Login')}
              fontWeight="BOLD"
              variant="tertiary">
              Ir para o login
            </Button>
          </S.BottomWrapper>
        </ScrollView>
      </S.RegisterContainer>
    </>
  );
}
