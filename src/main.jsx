import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Providers/AuthProviders";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProviders>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <>
            <RouterProvider router={router} />
          </>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProviders>
  </>
);
