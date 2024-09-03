// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import CustomerPage from "./pages/Customerpage";
import TransactionPage from "./pages/Transactionpage";
import Navbar from "./components/Navbar";
import BillPayPage from "./pages/Billpaypage";
import LoginPage from "./pages/Loginpage";
import PrivateRoute from "./components/PrivateRoute";
import CardPage from "./pages/Cardpage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const RoutesWithNavbar = () => {
    const location = useLocation();

    return (
      <>
        {location.pathname !== "/login" && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/"
            element={
              <PrivateRoute
                element={<div>Home</div>}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/billpay"
            element={
              <PrivateRoute
                element={<BillPayPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/cards"
            element={
              <PrivateRoute
                element={<CardPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute
                element={<CustomerPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/transactions"
            element={
              <PrivateRoute
                element={<TransactionPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <RoutesWithNavbar />
    </Router>
  );
};

export default App;
