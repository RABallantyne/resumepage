import React from "react";

export default function Hippify() {
  const h1 = document.createElement("h1");
  const hip = input => {
    let capped = input.toUpperCase().replace(/[AEIOU]/gi, "");
    let cappedDashed = capped.replace(/\s/g, " - ");
    h1.append(cappedDashed);
  };
  hip("rOb BalLantyne the dude");
  document.body.append(h1);
  return <div></div>;
}
