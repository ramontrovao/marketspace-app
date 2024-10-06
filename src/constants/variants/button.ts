import {THEME} from '../../styles/theme';

type TButtonVariantKey = 'primary' | 'secondary' | 'tertiary';

type TButtonVariant = Record<
  TButtonVariantKey,
  {
    textColor: keyof typeof THEME.COLORS;
    backgroundColor: keyof typeof THEME.COLORS;
  }
>;

export const BUTTON_VARIANTS: TButtonVariant = {
  primary: {
    textColor: 'WHITE',
    backgroundColor: 'BLUE_LIGHT',
  },
  secondary: {
    textColor: 'WHITE',
    backgroundColor: 'GRAY_1',
  },
  tertiary: {
    textColor: 'BLACK',
    backgroundColor: 'GRAY_5',
  },
} as const;
