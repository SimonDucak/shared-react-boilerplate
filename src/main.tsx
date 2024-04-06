import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { koopTheme } from '@/theme/koop'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={koopTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
