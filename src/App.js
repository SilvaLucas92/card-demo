import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardPage from "./pages/Cardpage";
import CustomerPage from "./pages/Customerpage";
import TransactionPage from "./pages/Transactionpage";
import Navbar from "./components/Navbar";
import BillPayPage from "./pages/Billpaypage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/billpay" element={<BillPayPage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </Router>
  );
};

export default App;
