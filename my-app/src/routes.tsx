import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <HomePage />
        </Layout>
      }
    />
  </Routes>
)

export default AppRoutes
