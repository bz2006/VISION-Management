import { Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from './pages/Home';
import GlobalStyle from './globalStyles';
import GenerateInvoice from "./pages/GenInvoice";
import ProductRecords from "./pages/productRecords";

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
