import "../App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fontsource/source-sans-pro/400.css";
import Home from "../pages/Home";
import HistoryRedeem from "../pages/HistoryRedeem";

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historyRedeem" element={<HistoryRedeem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
