import React from "react";
import {Header, Footer} from "../components";
import {Home} from "../pages";

import "../scss/style.scss";

function App() {
  return (
    <div className="app">
        <Header />

        <Home />

        <Footer />
    </div>
  );
}

export default App;
