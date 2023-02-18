import { useState, useEffect } from "react";
import WordForm from "./components/WordForm";
import Header from "./components/Header";
import WordDetails from "./components/WordDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [wordInfo, setWordInfo] = useState({});

  const getWordInfoHandler = (data) => {
    setWordInfo(...data);
  };

  // useEffect(() => {
  //   console.log(wordInfo);
  // }, [wordInfo]);

  return (
    <div className="flex flex-col justify-center items-center px-4 py-6 box-border">
      <Header />
      <WordForm getWordInfoHandler={getWordInfoHandler} />
      <WordDetails wordInfo={wordInfo} />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
