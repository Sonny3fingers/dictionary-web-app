import React from "react";
import AudioPlayer from "./AudioPlayer";
import Meanings from "./Meanings";

function WordDetails({ wordInfo, audioSrc }) {
  return (
    <div className="w-full py-2">
      <div className="flex justify-between pb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">{wordInfo.word}</h2>
          <span className="text-purple-500 text-lg font-bold">
            {wordInfo.phonetic}
          </span>
        </div>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
      <Meanings wordInfo={wordInfo} />
    </div>
  );
}

export default WordDetails;
