import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './admin/Dashboard/index.jsx'
import { NotificationProvider } from './components/NotificationContext/index.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </BrowserRouter>,
)
