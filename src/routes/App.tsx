import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fontsource/source-sans-pro/400.css";
import Home from "../pages/Home";
import HistoryRedeem from "../pages/HistoryRedeem";
import { Fade } from "@chakra-ui/react";

function App () {
  return (
    <div className="App">
      <Fade in={true}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historyRedeem" element={<HistoryRedeem />} />
          </Routes>
        </BrowserRouter>
      </Fade>
    </div>
  );
}

export default App;
