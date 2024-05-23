import Header from "./components/Header";
import Fields from "./components/Fields";
function App() {
  function handleChangeInput(event){
    console.log(event.target.value);
  }
  return (
    <main>
      <Header />
      <div className="input-group">
        <Fields inputType="text" changeInput={handleChangeInput}>Initial Investment</Fields>
        <Fields inputType="number" changeInput={handleChangeInput}>Annual Investment</Fields>
        <Fields inputType="text" changeInput={handleChangeInput}>Expected Return</Fields>
        <Fields inputType="text" changeInput={handleChangeInput}>Duration</Fields>
      </div>
      logs
    </main>
  );
}

export default App;
