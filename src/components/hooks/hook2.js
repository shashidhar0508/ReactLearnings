import React, { useState } from "react";

export default function Button1() {
  //array destructuring in useState
  //Pass initial state to useState to hook
  const [buttonText, setButtonText] = useState("Click me, please");

  function handleClick() {
    return setButtonText("Thanks been clicked");
  }

  return <button onClick={handleClick}>{buttonText}</button>;
}
