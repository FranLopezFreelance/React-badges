import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Badges from './pages/Badges'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

ReactDOM.render(<Badges />, document.getElementById('root'))

serviceWorker.unregister()
