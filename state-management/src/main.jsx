import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./queryClient.mjs";

import App from "./App.jsx";

import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <App/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
);
