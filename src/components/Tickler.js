import React from "react";

function Tickler() {
  function tickle() {
    alert("Teehee!");
    console.log("Teehee!");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
