import React from "react";
import AudioPlayer from "./AudioPlayer";
import Meanings from "./Meanings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function WordDetails({ wordInfo, audioSrc }) {
  if (Object.keys(wordInfo).length === 0) {
    return;
  }
  return (
    <div
      className="w-full py-2 animate-fade-in-down"
      key={crypto.randomUUID().toString()}
    >
      <div className="flex justify-between pb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2 capitalize md:text-6xl">
            {wordInfo.word}
          </h2>
          <span className="text-purple-500 text-lg font-bold md:text-2xl md:mt-5 block">
            {wordInfo.phonetic}
          </span>
        </div>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
      <Meanings wordInfo={wordInfo} />
      {Object.keys(wordInfo).length !== 0 && (
        <div className="border-t-2 mt-4 py-3">
          <span className="block text-base text-gray-500 dark:text-gray-100 py-2 md:text-xl">
            Source
          </span>
          <a
            href={wordInfo.sourceUrls[0]}
            className="underline mr-2 font-semibold text-xs transition-all duration-300 hover:text-neutral-500 dark:hover:text-neutral-300 md:text-base"
          >
            {wordInfo.sourceUrls[0]}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        </div>
      )}
    </div>
  );
}

export default WordDetails;
