import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeesPage from "./pages/EmployeesPage";
 import Login from "./pages/LoginPage";
// import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}

        {/* Protected later */}
        <Route path="/" element={<EmployeesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
