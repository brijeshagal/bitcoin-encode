import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./fonts/SAMAN___.ttf";
import "./index.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/Home/LandingPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Questions from "./pages/Questions/Questions";
import DepositForm from "./pages/Vault/DepositForm";
import DepositPage from "./pages/Vault/DepositPage";
import VaultOptions from "./pages/Vault/VaultOptions";
import Root from "./Root";
import WithNav from "./WithNav";
import Providers from "./wrappers/providers";

// Rootstock testnet address: 0xdBB537aAd87536Fb5D74aAE4478ace7E10ac7AF6

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "root",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/get-started",
        element: <Questions />,
      },
      {
        path: "/vault-options",
        element: <VaultOptions />,
      },
      {
        path: "/deposit-page",
        element: <DepositPage />,
      },
      {
        path: "/deposit-form",
        element: <DepositForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <WithNav />,
        children: [
          {
            path: "/portfolio",
            element: <Portfolio />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
