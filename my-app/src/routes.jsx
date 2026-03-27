import React from "react"
import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Layout from "./layout/Layout"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import DashboardPage from "./pages/DashboardPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import PasswordResetPage from "./pages/PasswordResetPage"
import PasswordResetRequestPage from "./pages/PasswordResetRequestPage"
import ProfilePage from "./pages/ProfilePage"
import ProjectsPage from "./pages/ProjectsPage"
import RegisterPage from "./pages/RegisterPage"
import VerifyEmailPage from "./pages/VerifyEmailPage"

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
    <Route
      path="/login"
      element={
        <Layout>
          <LoginPage />
        </Layout>
      }
    />
    <Route
      path="/register"
      element={
        <Layout>
          <RegisterPage />
        </Layout>
      }
    />
    <Route
      path="/dashboard"
      element={
        <Layout>
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        </Layout>
      }
    />
    <Route
      path="/profile"
      element={
        <Layout>
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        </Layout>
      }
    />
    <Route
      path="/password-reset-request"
      element={
        <Layout>
          <PasswordResetRequestPage />
        </Layout>
      }
    />
    <Route
      path="/reset-password"
      element={
        <Layout>
          <PasswordResetPage />
        </Layout>
      }
    />
    <Route
      path="/verify-email"
      element={
        <Layout>
          <VerifyEmailPage />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFoundPage />
        </Layout>
      }
    />
    <Route
      path="/contact"
      element={
        <Layout>
          <ContactPage />
        </Layout>
      }
    />
    <Route
      path="/jon-helge"
      element={
        <Layout>
          <HomePage />
        </Layout>
      }
    />
    <Route
      path="/projects"
      element={
        <Layout>
          <ProjectsPage />
        </Layout>
      }
    />
    <Route
      path="/about"
      element={
        <Layout>
          <AboutPage />
        </Layout>
      }
    />
  </Routes>
)

export default AppRoutes
