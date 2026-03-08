import DashboardPage from "@/pages/DashboardPage";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import ReportingPage from "@/pages/ReportingPage";
import SupportPage from "@/pages/SupportPage";
import TasksPage from "@/pages/TasksPage";
import UsersPage from "@/pages/UsersPage";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { settingsRoutes } from "./settings.routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/settings" replace />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/reporting" element={<ReportingPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/support" element={<SupportPage />} />
        {settingsRoutes}
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}
