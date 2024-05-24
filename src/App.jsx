import Header from "./components/Header";
import Fields from "./components/Fields";
import Result from "./components/Result";
function App() {
  function handleChangeInput(event){
    console.log(event.target.value);
  }
  return (
    <main>
      <Header />
      <Fields />
      <Result />
    </main>
  );
}

export default App;
