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
import HomePage from "./pages/Homepage";

import AddCustomerPage from "./pages/AddCustomerPage";
import ViewCustomersPage from "./pages/ViewCustomerpage";
import ViewCardsPage from "./pages/ViewCardsPage";
import AddCardPage from "./pages/AddCardPage";
import AddTransactionPage from "./pages/AddTransactionPage";
import ViewTransactionsPage from "./pages/ViewTransactionsPage";

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
                element={<HomePage />}
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
          <Route
            path="/view-customers"
            element={
              <PrivateRoute
                element={<ViewCustomersPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/add-customer"
            element={
              <PrivateRoute
                element={<AddCustomerPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/view-cards"
            element={
              <PrivateRoute
                element={<ViewCardsPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/add-card"
            element={
              <PrivateRoute
                element={<AddCardPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/view-transactions"
            element={
              <PrivateRoute
                element={<ViewTransactionsPage />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/add-transaction"
            element={
              <PrivateRoute
                element={<AddTransactionPage />}
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
