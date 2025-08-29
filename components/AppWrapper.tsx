"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import store from "@/redux/store";

type Props = {
  children: React.ReactNode;
};

const persistor = persistStore(store);

const AppWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AntdRegistry>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </AntdRegistry>
        <Toaster />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
