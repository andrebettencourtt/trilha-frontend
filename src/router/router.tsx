import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage2 } from "../pages/LoginPage2/LoginPage";
import { Students } from "../pages/hero/Students/Students";
import { DefaultLayout } from "../layout/DefaultLayout";
import { RecoverPassword } from "../pages/LoginPage2/RecoverPassword/RecoverPassword";
import { Trilhas } from "../pages/hero/Trilhas/Trilhas";
import { TrilhaProvider } from "../pages/hero/Trilhas/TrilhaContext/TrilhaContext";
import { AuthProvider } from "../pages/LoginPage2/LoginContext/LoginContext";
import ModuleComponent from "../pages/hero/Trilhas/components/modules/modules";

const ConfigRouter = () => {
  const token = sessionStorage.getItem("token");

  return (
    <AuthProvider>
      <TrilhaProvider>
        <Routes>
          <Route path="/" element={<LoginPage2 />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />

          {token ? (
            <Route path="/hero" element={<DefaultLayout />}>
              <Route path="students" element={<Students />} />
              <Route path="trilhas" element={<Trilhas />} />
              <Route path="modulos" element={<ModuleComponent />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </TrilhaProvider>
    </AuthProvider>
  );
};

export default ConfigRouter;
