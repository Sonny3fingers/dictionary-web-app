import WordForm from "./components/WordForm";
import Header from "./components/Header";
import WordDetails from "./components/WordDetails";

function App() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-6">
      <Header />
      <WordForm />
      <WordDetails />
    </div>
  );
}

export default App;
