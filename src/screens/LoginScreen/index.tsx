import React from 'react';
import * as S from './styles';
import {Logo} from '../../assets/svg/Logo';

export function LoginScreen() {
  return (
    <S.LoginContainer>
      <S.LogoContainer>
        <Logo width={80} height={50} />

        <S.LogoTitleContainer>
          <S.LogoTitle>marketspace</S.LogoTitle>
          <S.LogoSubtitle>Seu espaço de compra e venda</S.LogoSubtitle>
        </S.LogoTitleContainer>
      </S.LogoContainer>
    </S.LoginContainer>
  );
}
