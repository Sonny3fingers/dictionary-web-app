import { useState } from "react";
import WordForm from "./components/WordForm";
import Header from "./components/Header";
import WordDetails from "./components/WordDetails";

function App() {
  const [wordInfo, setWordInfo] = useState({});

  const getWordInfoHandler = (data) => {
    setWordInfo(...data);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 py-6 box-border">
      <Header />
      <WordForm getWordInfoHandler={getWordInfoHandler} />
      <WordDetails wordInfo={wordInfo} />
    </div>
  );
}

export default App;
