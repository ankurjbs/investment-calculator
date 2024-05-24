import { useState } from "react";
import Header from "./components/Header";
import Fields from "./components/Fields";
import Result from "./components/Result";

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
  });

  function handleChange(inputIdentifier,newValue){
    setUserInput(prevInput => {
      return {
         ...prevInput,
          [inputIdentifier]:newValue
        }        
      });
      console.log(userInput);
  }

  return (
    <main>
      <Header />
      <Fields userInput={userInput} onChange={handleChange}/>
      <Result />
    </main>
  );
}

export default App;
