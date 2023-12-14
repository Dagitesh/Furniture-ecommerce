import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/landing";

function App() {
  return (
  <Router>
    <Landing  path="/Home" />
  </Router>
  );
}

export default App;