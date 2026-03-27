import React from "react"
import "./App.css"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import AppRoutes from "./routes"

const App = () => {
  return (
    <AuthProvider>
      <HelmetProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </AuthProvider>
  )
}

export default App
