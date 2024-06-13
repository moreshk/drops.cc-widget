import React from "react";
import App from "./App";
import "./globals.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("dropz-root");
const root = createRoot(container);
root.render(<App />);
