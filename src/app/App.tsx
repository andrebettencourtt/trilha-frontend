import { BrowserRouter } from "react-router-dom";
import "../css/global.css";
import ConfigRouter from "../router/router";
import { AuthProvider } from "../pages/LoginPage2/LoginContext/LoginContext";

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ConfigRouter />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
