import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const rootElement = document.getElementById("root") || document.body
const root = ReactDOM.createRoot(rootElement)
root.render(() => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
))

