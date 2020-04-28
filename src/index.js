import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./Components/App"
import "./index.css"
import configureStore from './redux/configureStore'

const store = configureStore()

render(
  <Router>
	<App />
  </Router>,
  
   document.getElementById("app")
);
