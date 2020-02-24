import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
