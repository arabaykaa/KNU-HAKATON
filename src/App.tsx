import Home from "./components/screens/home/Home";

function App() {
  console.log(import.meta.env.VITE_MAIN_API);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
