import React from 'react';
import './Results.css';

const Results = (props) =>{
  console.log("in results.js");
  console.log(props.calculatedResults);
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.calculatedResults.map((yearlyresult) =>(
          <tr>
            <td> {yearlyresult.year} </td>
            <td> {yearlyresult.savingsEndOfYear} </td>
            <td> {yearlyresult.yearlyInterest} </td>
            <td> {yearlyresult.totalInterestTillNow} </td>
            <td> {yearlyresult.totalContributionTillNow} </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Results ;
