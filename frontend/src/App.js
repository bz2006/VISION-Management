import { Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './pages/Home';
import axios from "axios"
import GlobalStyle from './globalStyles';
import ProductRecords from "./pages/productRecords";
import General from "./pages/General";
import Invoice from "./pages/Invoice";
import GenerateInvoice from "./pages/GenInvoice";
import Allinvoices from "./pages/Allinvoices";
import GenerateExistingInvoice from "./pages/GenExistingInvoice";

axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-invoice" element={<Invoice />} />
        <Route path="/products-records" element={<ProductRecords />} />
        <Route path="/general-details" element={<General />} />
        <Route path="/generate-invoice" element={<GenerateInvoice />} />
        <Route path="/all-invoices" element={<Allinvoices />} />
        <Route path="/gen-existing-invoice" element={<GenerateExistingInvoice />} />
      </Routes>
    </>
  );
}

export default App;
