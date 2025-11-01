import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import App from "./App.jsx";
import CheckPage from "./pages/CheckPage.jsx";
import SummaryPage from "./pages/SummaryPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route index path="/" element={<App />} />
      <Route path="check" element={<CheckPage />} />
      <Route path="summary" element={<SummaryPage />} />
    </Routes>
  </BrowserRouter>
);
