import React, { useEffect, useState } from "react";
import './InputGroup.css';

const InputGroup = (props) =>{
    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
    const [enteredYearlyContribution, setEnteredYearlyContribution] = useState('');
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');

    const currentSavingsChangeHandler = (event) =>{
      setEnteredCurrentSavings(event.target.value);
      console.log("From SubInpuptGroup");
      console.log(enteredCurrentSavings);
    }

    const yearlyContributionChangeHandler = (event) =>{
      setEnteredYearlyContribution(event.target.value);
      console.log("From SubInpuptGroup");
      console.log(enteredYearlyContribution);
    }

    const expectedReturnChangeHandler = (event) =>{
      setEnteredExpectedReturn(event.target.value);
      console.log("From SubInpuptGroup");
      console.log(enteredExpectedReturn);
    }

    const durationChangeHandler = (event) =>{
      setEnteredDuration(event.target.value);
      console.log("From SubInpuptGroup");
      console.log(enteredDuration);
    }

    // let shouldPassData = props.shouldPassData;
    useEffect(()=>{
      if(props.shouldPassData){
        console.log("Changes applied by Form in InputGroup")
      }
    },[props.shouldPassData]);

    return(
      <div>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={currentSavingsChangeHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={yearlyContributionChangeHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={expectedReturnChangeHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={durationChangeHandler}/>
          </p>
        </div>
      </div>
    );
}

export default InputGroup;