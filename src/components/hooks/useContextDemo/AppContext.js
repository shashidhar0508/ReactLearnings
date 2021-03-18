import React from "react";
import ThemeContext from "./themecontext";
import "./AppContext.css";
import MyCircle from "./mycircle";

//Provider
function AppContext() {
  let light = "light";
  return (
    <ThemeContext.Provider value={light}>
      <h1>useContexthook</h1>
      <MyCircle />
    </ThemeContext.Provider>
  );
}

export default AppContext;
