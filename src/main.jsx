import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducer'
import { thunk } from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
