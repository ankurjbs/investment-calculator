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
          [inputIdentifier]:+newValue
        }        
      });
      // we are adding + symbol before newValue because initialy it takes as string after using + symbol it converts into integer
      console.log(userInput);
  }

  return (
    <main>
      <Header />
      <Fields userInput={userInput} onChange={handleChange}/>
      <Result input={userInput} />
    </main>
  );
}

export default App;
