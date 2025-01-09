import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import PasswordResetRequestPage from "./pages/PasswordResetRequestPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout/Layout";
import ContactPage from "./pages/ContactPage";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={ <Layout><HomePage /></Layout> } />
        <Route path="/login" element={<Layout><LoginPage /></Layout> } />
        <Route path="/register" element={<Layout><RegisterPage /></Layout>} />
        <Route path="/dashboard" element={<Layout><ProtectedRoute><DashboardPage /></ProtectedRoute></Layout>} />
        <Route path="/profile" element={<Layout><ProtectedRoute><ProfilePage /></ProtectedRoute></Layout>} />
        <Route path="/password-reset-request" element={<Layout><PasswordResetRequestPage /></Layout>} />
        <Route path="/reset-password" element={<Layout><PasswordResetPage /></Layout>} />
        <Route path="/verify-email" element={<Layout><VerifyEmailPage /></Layout> } />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
    </Routes>
);

export default AppRoutes;
