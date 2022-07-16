import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { ProductProvider } from "./context/provider/ProductProvider";
import { UserProvider } from "./context/provider/UserProvider";
import { HistoryRedeemProvider } from "./context/provider/HistoryRedeemProvider";
import "./index.scss";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <HistoryRedeemProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </HistoryRedeemProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
