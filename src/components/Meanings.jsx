import React from "react";
import Meaning from "./Meaning";

function Meanings({ wordInfo }) {
  const meanings = wordInfo.meanings;
  console.log(meanings);
  if (Object.keys(wordInfo).length === 0) {
    return;
  }
  return (
    <div>
      {meanings.map((item) => (
        <Meaning item={item} />
      ))}
    </div>
  );
}

export default Meanings;
