import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string,

    colors: {
      primary: string;
      background: string;
      text: string;
      smoke: string;
      lightText: string;
    }

    fonts: {
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
