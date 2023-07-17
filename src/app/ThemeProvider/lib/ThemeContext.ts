import { createContext } from "react";


export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
  }
  
  export interface ThemeContextProp {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
  }

  export const ThemeContext = createContext<ThemeContextProp>({})

  export const LOKAL_STARAGE_THEME_KEY = 'theme'