import React from "react";

import classes from "./App.module.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
