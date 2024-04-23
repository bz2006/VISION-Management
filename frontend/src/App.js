import { Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './pages/Home';
import axios from "axios"
import GlobalStyle from './globalStyles';
import GenerateInvoice from "./pages/GenInvoice";
import ProductRecords from "./pages/productRecords";

axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-invoice" element={<GenerateInvoice />} />
        <Route path="/products-records" element={<ProductRecords />} />
      </Routes>
    </>
  );
}

export default App;
