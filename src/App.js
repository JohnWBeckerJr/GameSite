import React from "react";
//COMPONENTS & PAGES
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      {/* <h1>SUP</h1> */}
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
