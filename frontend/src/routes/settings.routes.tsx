import RoleComponent from "@/components/settings/roles/RoleComponent";
import ComingSoon from "@/components/shared/ComingSoon";
import { SETTINGS_TABS } from "@/constants/settings_tab";
import SettingsPage from "@/pages/SettingsPage";
import { Navigate, Route } from "react-router-dom";

export const settingsRoutes = (
  <Route path="/settings" element={<SettingsPage />}>
    <Route index element={<Navigate to="roles" replace />} />
    {SETTINGS_TABS.map((tab) =>
      tab.id == "roles" ? (
        <Route path="roles" element={<RoleComponent />} />
      ) : (
        <Route path={tab.id} element={<ComingSoon title={tab.label} showHeader={false}/>} />
      ),
    )}
  </Route>
);
