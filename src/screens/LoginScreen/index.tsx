import React from 'react';
import * as S from './styles';
import {Logo} from '../../assets/svg/Logo';
import {TextInput} from '../../components/TextInput';

export function LoginScreen() {
  return (
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
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Senha" />
        </S.FormContainer>
      </S.TopWrapper>

      <S.BottomWrapper>
        <S.SignUpTitle>Ainda não tem acesso?</S.SignUpTitle>
      </S.BottomWrapper>
    </S.LoginContainer>
  );
}
