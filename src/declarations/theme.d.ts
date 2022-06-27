import themeConfig from '../lib/theme';

type ThemeConfig = typeof themeConfig;

declare module '@emotion/react' {
  export interface Theme extends ThemeConfig {}
}