import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemetProvider from './context/ThemetProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemetProvider>
      <App/>

    </ThemetProvider>
  
  </StrictMode>,
)
