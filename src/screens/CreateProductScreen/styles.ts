import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../../components/Text';

export const CreateProductContainer = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex: 1;
`;

export const CreateProductHeader = styled.View`
  width: 100%;

  justify-content: space-between;
  flex-direction: row;
`;

export const CreateProductTitle = styled(Text)`
  flex: 1;

  font-size: 20px;
  text-align: center;
`;

export const FormContainer = styled.View`
  margin-top: 32px;

  flex: 1;
  gap: 32px;
`;

export const FormField = styled.View`
  gap: 16px;
`;

export const RadioContainer = styled.TouchableOpacity`
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding: 24px;
  height: 90px;

  flex-direction: row;
  gap: 12px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;
