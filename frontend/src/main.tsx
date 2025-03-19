import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <div className="bg-blue-500 text-yellow-500 p-4">
      Hello, Tailwind!
    </div>
  </StrictMode>,
)
