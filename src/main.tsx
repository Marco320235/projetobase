import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import MonitorDetalhes from './pages/MonitorDetalhes.tsx'
import SobreDesenvolvedor from './pages/SobreDesenvolvedor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/monitor/:tipo" element={<MonitorDetalhes />} />
        <Route path="/sobre" element={<SobreDesenvolvedor />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
