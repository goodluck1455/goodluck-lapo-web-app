import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ComplaintProvider } from './assets/Components/ComplaintContext.tsx'
// import { ComplaintProvider } from "./ComplaintContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ComplaintProvider>
    <App />
    </ComplaintProvider>
  </StrictMode>,
)
