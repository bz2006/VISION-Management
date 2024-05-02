import { Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './pages/Home';
import axios from "axios"
import GlobalStyle from './globalStyles';
import Records from "./pages/Records";
import General from "./pages/General";
import Invoice from "./pages/Invoice";
import GenerateInvoice from "./pages/Invoice-Generators/GenInvoice"
import Allinvoices from "./pages/Allinvoices";
import GenerateExistingInvoice from "./pages/Invoice-Generators/GenExistingInvoice";
import MultipleInvoices from "./pages/Invoice-Generators/MultipleInvoices";
import MonthlyInvoices from "./pages/Invoice-Generators/ViewMonthlyInvoices";
import MRPDetails from "./pages/MRP-Generator/MRPDetails";
import MRPGenerate from "./pages/MRP-Generator/MRP-Generate";


axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-invoice" element={<Invoice />} />
        <Route path="/records" element={<Records />} />
        <Route path="/general-details" element={<General />} />
        <Route path="/generate-invoice" element={<GenerateInvoice />} />
        <Route path="/all-invoices" element={<Allinvoices />} />
        <Route path="/gen-existing-invoice" element={<GenerateExistingInvoice />} />
        <Route path="/multiple-invoice" element={<MultipleInvoices />} />
        <Route path="/view-monthly-invoices" element={<MonthlyInvoices />} />
        <Route path="/mrp-gen-details" element={<MRPDetails />} />
        <Route path="/generate-mrp" element={<MRPGenerate />} />
      </Routes>
    </>
  );
}

export default App;
