import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode >
)
