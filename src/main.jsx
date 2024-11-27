// Criado Por Ihury Ferreira

// Módulos
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilo globais
import './assets/styles/tailwind.css'
import './assets/styles/global.css'

//Componente principal
import App from './pages/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
