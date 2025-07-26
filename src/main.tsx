import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-300">
      <App />
    </div>
  </StrictMode>
);
