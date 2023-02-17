import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function AudioPlayer({ wordInfo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playHandler = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseHandler = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  if (!wordInfo.phonetics) {
    return;
  }
  return (
    <div>
      <audio
        ref={audioRef}
        src={wordInfo.phonetics[0].audio}
        controls={false}
        autoPlay={isPlaying}
        onPlay={playHandler}
        onPause={pauseHandler}
      ></audio>
      <button
        className="w-12 h-12 rounded-full bg-purple-300 transition duration-300 hover:bg-purple-200"
        onClick={isPlaying ? pauseHandler : playHandler}
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="text-purple-500"
        />
      </button>
    </div>
  );
}

export default AudioPlayer;
