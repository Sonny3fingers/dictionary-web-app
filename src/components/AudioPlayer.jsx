import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function AudioPlayer({ audioSrc }) {
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

  if (!audioSrc) {
    return;
  }
  return (
    <div className="flex justify-center items-center">
      <audio
        ref={audioRef}
        src={audioSrc}
        controls={false}
        autoPlay={isPlaying}
        onPlay={playHandler}
        onPause={pauseHandler}
      ></audio>
      <button
        className="flex justify-center items-center w-12 h-12 rounded-full bg-purple-300 transition duration-300 hover:bg-purple-200 md:w-16 md:h-16"
        onClick={isPlaying ? pauseHandler : playHandler}
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="text-purple-500 md:text-2xl"
        />
      </button>
    </div>
  );
}

export default AudioPlayer;
