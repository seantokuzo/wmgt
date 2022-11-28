import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'
import { AppContextProvider } from 'context/appContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
