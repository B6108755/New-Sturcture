import React from "react";
import { Navigate } from "./components/Navigate";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigate />
      </BrowserRouter>
    </div>
  );
}

export default App;
