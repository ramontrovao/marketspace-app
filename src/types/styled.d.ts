import 'styled-components/native';
import {THEME} from '../styles/theme';

type TTheme = typeof THEME;

declare module 'styled-components/native' {
  export interface DefaultTheme extends TTheme {}
}
