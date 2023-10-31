import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import Reserve from "./Reserve";
import Header from "./Header";
import Footer from "./Footer";
import FormShell from "./GlobalContext";
import Confirm from "./Confirm";
import Error404 from "./Error";
import { useState, createContext, useContext } from "react";
import ThankYou from "./ThankYou";

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
