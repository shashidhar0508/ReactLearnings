// Stateless functional component
import React from "react";

// default is not required for stateless components
// "const" is given so that there are no duplicate components with same name in entire project
// Stateless functional component always returns something
// Here this fucntion is returning a DOM node.

// Now the Data which we passed from Parent can't be passed to grandchild, which means we can't pass data from this compoenent to its child component
export const Header = (props) => {
  return (
    <div>
      <h1 className="bg-dark text-warning text-center">
        Shashidhar
        <p>{props.name_info}</p>
      </h1>
    </div>
  );
};
