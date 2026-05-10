import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div style={{background:'#0d0d14',minHeight:'100vh'}}></div>}>
      <App />
    </Suspense>
  </StrictMode>,
)