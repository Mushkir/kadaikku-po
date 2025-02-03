import { registerRootComponent } from "expo";
import "./global.css";
import App from "./App";
import React from "react";
import { AppProvider } from "./app/context/AppContext";

function Root() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

registerRootComponent(Root);
