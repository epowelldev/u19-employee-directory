import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

import AppState from "./context/app/AppState";

function App() {
    return (
      <AppState>
          <Header />
          <Body />
      </AppState>
    );
};

export default App;
