import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

import App from "./App.jsx";
import CheckPage from "./pages/CheckPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<App />} />
      <Route path="check" element={<CheckPage />} />
    </Routes>
  </BrowserRouter>
);
