import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../../components/Text';

export const CreateProductContainer = styled(SafeAreaView)`
  padding: 24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
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
