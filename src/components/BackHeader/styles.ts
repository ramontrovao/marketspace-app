import styled from 'styled-components/native';

export const BackHeaderContainer = styled.View`
  width: 100%;
  padding: 16px 24px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`;
