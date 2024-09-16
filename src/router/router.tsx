import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HeroPage } from "../pages/hero/Hero";
/* import { LoginPage } from "../pages/LoginPage/Login";
 */ import { LoginPage2 } from "../pages/LoginPage2/LoginPage";
import { Students } from "../pages/hero/Students/Students";

const ConfigRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hero" element={<HeroPage />} />
        <Route path="/" element={<LoginPage2 />} />
        <Route path="/students" element={<Students />} />
        {/*         <Route path="/" element={<LoginPage />} />
         */}{" "}
      </Routes>
    </Router>
  );
};

export default ConfigRouter;
