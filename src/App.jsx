import { useState, createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Components/Home/Home";
import Reserve from "./Components/Reserve/Reserve";
import Header from "./Components/Header & Footer/Header";
import Footer from "./Components/Header & Footer/Footer";
import FormShell from "./Context & Data/GlobalContext";
import Confirm from "./Components/Confirm/Confirm";
import Error404 from "./Components/Error/Error";
import ThankYou from "./Components/ThankYou/ThankYou";

import "./App.css";

const AppLoading = createContext(null);
export const useAppLoading = () => useContext(AppLoading);

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <AppLoading.Provider value={setLoading}>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/reserve-a-table"
          element={<FormShell children={<Reserve />} />}
        />
        <Route path="*" element={<Error404 />} />
        <Route
          path="/confirm-reservation"
          element={<FormShell children={<Confirm />} />}
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
      {loading && (
        <div className="loading">
          <div className="custom-loader-app"></div>
          <p className="font-sec text-[2.5rem] text-sec_1 font-bold">
            Please wait a moment ...
          </p>
        </div>
      )}
    </AppLoading.Provider>
  );
}

export default App;
