import { useState } from "react";

export default function Fields() {
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input type="number" required onChange={(event)=>handleChange('initialInvestment',event.target.value)} value={userInput.initialInvestment}/>
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input type="number" required onChange={(event)=>handleChange('annualInvestment',event.target.value)} value={userInput.annualInvestment}/>
        </p>      
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input type="number" required onChange={(event)=>handleChange('expectedReturn',event.target.value)} value={userInput.expectedReturn}/>
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input type="number" required onChange={(event)=>handleChange('duration',event.target.value)} value={userInput.duration}/>
        </p>      
      </div>
    </section>
  );
}
