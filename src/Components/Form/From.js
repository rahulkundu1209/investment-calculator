import React, { useState } from 'react';
import './Form.css';

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const  From = (props) => {
    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
    const [enteredYearlyContribution, setEnteredYearlyContribution] = useState('');
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState('');
    const [enteredDuration, setEnteredDuration] = useState('');

    const currentSavingsChangeHandler = (event) =>{
      setEnteredCurrentSavings(event.target.value);
      // console.log("From SubInpuptGroup");
      // console.log(enteredCurrentSavings);
    }

    const yearlyContributionChangeHandler = (event) =>{
      setEnteredYearlyContribution(event.target.value);
      // console.log("From SubInpuptGroup");
      // console.log(enteredYearlyContribution);
    }

    const expectedReturnChangeHandler = (event) =>{
      setEnteredExpectedReturn(event.target.value);
      // console.log("From SubInpuptGroup");
      // console.log(enteredExpectedReturn);
    }

    const durationChangeHandler = (event) =>{
      setEnteredDuration(event.target.value);
      // console.log("From SubInpuptGroup");
      // console.log(enteredDuration);
    }

    const resetHandler = (event) => {
      event.preventDefault();

      setEnteredCurrentSavings('');
      setEnteredYearlyContribution('');
      setEnteredExpectedReturn('');
      setEnteredDuration('');

      const userInput = {
        currentSavings: '',
        yearlycontribution: '',
        expectedReturn: '',
        duration: ''
      }
      calculateHandler(userInput);
    }

    const submitHandler = (event) => {
      event.preventDefault();
      const userInput = {
        currentSavings: enteredCurrentSavings,
        yearlycontribution: enteredYearlyContribution,
        expectedReturn: enteredExpectedReturn,
        duration: enteredDuration
      }
      calculateHandler(userInput);
    }
  
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlycontribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    let totalContribution = currentSavings;
    let totalGainedInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalGainedInterest = totalGainedInterest+yearlyInterest;
      totalContribution += yearlyContribution;
      yearlyData.push({
        
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: formatter.format(yearlyContribution),
        totalInterestTillNow: formatter.format(totalGainedInterest),
        totalContributionTillNow: formatter.format(totalContribution),
        id: i+1
      });
    }
    props.onCalculation(yearlyData);


  };
  return (
    <form className="form" onSubmit={submitHandler} onReset={resetHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={enteredCurrentSavings} onChange={currentSavingsChangeHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={enteredYearlyContribution} onChange={yearlyContributionChangeHandler}/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={enteredExpectedReturn} onChange={expectedReturnChangeHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={enteredDuration} onChange={durationChangeHandler}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default From;
