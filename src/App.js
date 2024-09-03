import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardPage from "./pages/Cardpage";
import CustomerPage from "./pages/Customerpage";
import TransactionPage from "./pages/Transactionpage";
import Navbar from "./components/Navbar";
import BillPayPage from "./pages/Billpaypage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/billpay" element={<BillPayPage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route
          path="/"
          element={
            <div
              className="container"
              style={{ padding: "20px", textAlign: "center" }}
            >
              <h1 style={{ fontSize: "2rem", color: "#333" }}>Home</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
