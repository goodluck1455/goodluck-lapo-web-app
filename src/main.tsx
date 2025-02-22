import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ComplaintProvider } from './assets/Components/ComplaintContext.tsx'
import { ProfileProvider } from './assets/Components/ProfileContext.tsx'
// import { ComplaintProvider } from "./ComplaintContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfileProvider >
   <ComplaintProvider>
    <App />
    </ComplaintProvider>
    </ProfileProvider>
  </StrictMode>,
)
