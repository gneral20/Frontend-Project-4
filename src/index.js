import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducer'


const store = createStore(rootReducer)

const appJsx = (
  <HashRouter>
  <Provider store={store}> 
    <App />
  </Provider>
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
