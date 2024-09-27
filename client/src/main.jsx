import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode >
)
