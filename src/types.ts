export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
  border: string;
}

export interface WithThemeProps {
  theme: ThemeType;
}