import 'styled-components';
import {THEME} from '../styles/theme';

type TTheme = typeof THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
