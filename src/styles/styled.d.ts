import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string,

    colors: {
      lightGreen: string;
      darkGreen: string;
      background: string;
      text: string;
      smoke: string;
      timer: string;
      lightText: string;
      darkText: string;
      lightRed: string;
      darkRed: string;
      focus: string;
    }

    fonts: {
      light: string;
      extraLight: string;
      regular: string;
      bold: string;
    },

    fontSizes: {
      small: string;
      regular: string;
      medium: string;
      big: string;
    },
  }
}
