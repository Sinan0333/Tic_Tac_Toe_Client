import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SocketProvider } from './contexts/socketContext.jsx'
import {Provider} from "react-redux"
import store,{persistor} from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { GoogleOAuthProvider } from '@react-oauth/google';
console.log(import.meta.env)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SocketProvider>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
            <App />
          </GoogleOAuthProvider>
        </SocketProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
