import React from "react";
import Meaning from "./Meaning";

function Meanings({ wordInfo }) {
  const meanings = wordInfo.meanings;
  if (Object.keys(wordInfo).length === 0) {
    return;
  }
  return (
    <>
      {meanings.map((item) => (
        <Meaning item={item} />
      ))}
    </>
  );
}

export default Meanings;
