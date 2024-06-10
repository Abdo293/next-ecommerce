"use client";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Providers;
