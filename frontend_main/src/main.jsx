import { RootstockTestnet } from "@thirdweb-dev/chains";
import {
  coinbaseWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  smartWallet,
  ThirdwebProvider,
  walletConnect,
} from "@thirdweb-dev/react";
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

// Rootstock testnet address: 0xdBB537aAd87536Fb5D74aAE4478ace7E10ac7AF6

const smartWalletOptions = {
  factoryAddress: "0xdBB537aAd87536Fb5D74aAE4478ace7E10ac7AF6",
  gasless: true,
};

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
    <ThirdwebProvider
      activeChain={RootstockTestnet}
      clientId="61a6d8958608c0895498206cf21fc890"
      // locale={en()}
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletOptions),
        smartWallet(coinbaseWallet({ recommended: true }), smartWalletOptions),
        smartWallet(walletConnect(), smartWalletOptions),
        smartWallet(localWallet(), smartWalletOptions),
        smartWallet(
          embeddedWallet({
            auth: {
              options: ["email", "google", "apple", "facebook"],
            },
          }),
          smartWalletOptions
        ),
        //  metamaskWallet()
      ]}
    >
      <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);
