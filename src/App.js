import { useState, useEffect } from "react";
import WordForm from "./components/WordForm";
import Header from "./components/Header";
import WordDetails from "./components/WordDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wordInfo, setWordInfo] = useState({});
  const [audioSrc, setAudioSrc] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState("serif");

  const selectFontFamilyHandler = (font) => {
    setSelectedFontFamily(font);
  };

  const darkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  const getWordInfoHandler = (data) => {
    setWordInfo(...data);
  };

  const restartWordInfoHandler = () => {
    setWordInfo({});
  };

  useEffect(() => {
    if ("phonetics" in wordInfo) {
      if (wordInfo.phonetics.length !== 0) {
        wordInfo.phonetics.forEach((item) => {
          if (item.audio !== "") {
            setAudioSrc(item.audio);
          } else {
            setAudioSrc(null);
          }
        });
      } else {
        setAudioSrc(null);
      }
    }
  }, [wordInfo]);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } font-${selectedFontFamily} min-h-screen animate-fadeIn`}
    >
      <div
        className={`flex flex-col justify-center items-center px-5 pt-6 pb-14 box-border md:px-10 md:pt-14 lg:max-w-screen-lg lg:m-auto  ${
          darkMode ? "dark" : ""
        }`}
      >
        <Header
          darkMode={darkMode}
          darkModeHandler={darkModeHandler}
          selectFontFamilyHandler={selectFontFamilyHandler}
          restartWordInfoHandler={restartWordInfoHandler}
        />
        <WordForm getWordInfoHandler={getWordInfoHandler} />
        <WordDetails wordInfo={wordInfo} audioSrc={audioSrc} />
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
