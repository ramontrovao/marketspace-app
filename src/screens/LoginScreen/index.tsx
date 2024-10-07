import React from 'react';
import * as S from './styles';
import {Logo} from '../../assets/svg/Logo';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {Controller, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {StatusBar} from 'react-native';
import {THEME} from '../../styles/theme';

export function LoginScreen() {
  const loginFormSchema = z.object({
    email: z
      .string({message: 'Este campo é obrigatório.'})
      .min(1, 'Este campo é obrigatório.')
      .email('Digite um e-mail válido.'),
    password: z
      .string({message: 'Este campo é obrigatório.'})
      .min(1, 'Este campo é obrigatório.'),
  });

  type TLoginFormSchema = z.infer<typeof loginFormSchema>;

  function onSubmit(data: TLoginFormSchema) {
    console.log(data);
  }

  const {control, handleSubmit} = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    reValidateMode: 'onChange',
  });

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GRAY_6}
        barStyle="dark-content"
      />

      <S.LoginContainer>
        <S.TopWrapper>
          <S.LogoContainer>
            <Logo width={80} height={50} />

            <S.LogoTitleContainer>
              <S.LogoTitle>marketspace</S.LogoTitle>
              <S.LogoSubtitle>Seu espaço de compra e venda</S.LogoSubtitle>
            </S.LogoTitleContainer>
          </S.LogoContainer>

          <S.FormContainer>
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

            <Button onPress={handleSubmit(onSubmit)} fontWeight="BOLD">
              Entrar
            </Button>
          </S.FormContainer>
        </S.TopWrapper>

        <S.BottomWrapper>
          <S.SignUpTitle>Ainda não tem acesso?</S.SignUpTitle>

          <Button fontWeight="BOLD" variant="tertiary">
            Criar uma conta
          </Button>
        </S.BottomWrapper>
      </S.LoginContainer>
    </>
  );
}
