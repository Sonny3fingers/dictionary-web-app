import { useState, useEffect } from "react";
import WordForm from "./components/WordForm";
import Header from "./components/Header";
import WordDetails from "./components/WordDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wordInfo, setWordInfo] = useState({});
  const [audioSrc, setAudioSrc] = useState(null);

  const getWordInfoHandler = (data) => {
    setWordInfo(...data);
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
    <div className="flex flex-col justify-center items-center px-4 py-6 box-border">
      <Header />
      <WordForm getWordInfoHandler={getWordInfoHandler} />
      <WordDetails wordInfo={wordInfo} audioSrc={audioSrc} />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
