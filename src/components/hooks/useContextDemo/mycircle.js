import React, { useContext } from "react";
import ContextDemo from "../../contextAPI/ContextDemo";
import ThemeContext from "./themecontext";

function MyCircle() {
  const value = useContext(ThemeContext);
  return (
    <div id="mycircle" className={value}>
      Circle
    </div>
  );
}

// using like example in "ContextDemo.js" from "contextAPI"
// const MyCircle = () => {
//   <ThemeContext.Consumer>
//     {(value) => {
//       <div id="mycircle" className={value}>
//         Circle
//       </div>;
//     }}
//   </ThemeContext.Consumer>;
// };

export default MyCircle;
