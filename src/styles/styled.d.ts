import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      primary: string
      secondary: string
      accent: string
      inputColor: string
    }
    shadow: string
  }
}
