import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ProductListingContainer = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  flex: 1;
`;
