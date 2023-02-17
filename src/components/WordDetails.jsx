import React from "react";
import AudioPlayer from "./AudioPlayer";

function WordDetails({ wordInfo }) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div>
          <h2>{wordInfo.word}</h2>
          <span>{wordInfo.phonetic}</span>
        </div>
        <AudioPlayer wordInfo={wordInfo} />
      </div>
    </div>
  );
}

export default WordDetails;
