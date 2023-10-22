import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Reserve } from "./Reserve";
import Header from "./Header";
import Footer from "./Footer";
import FormShell from "./GlobalContext";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/reserve-a-table"
          element={<FormShell children={<Reserve />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
