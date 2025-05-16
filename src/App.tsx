import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default.ts'
import { Router } from './Router.tsx'
import { BrowserRouter } from 'react-router-dom'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
