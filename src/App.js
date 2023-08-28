import { useState } from 'react';
import From from './Components/Form/From';
import Header from './Components/Header/Header';
import Results from './Components/Results/Results';
import Footer from './Components/Footer/Footer';

function App() {
  const [calculatedResults, setCalculatedResults] = useState('');
  
  const calculatedDataHandler = (calculatedData) =>{
    setCalculatedResults(calculatedData);
  }

  // console.log("From App.js");
  // console.log(calculatedResults);

  const length = Object.keys(calculatedResults).length;

  return (
    <div>
      <Header/>
      <From onCalculation={calculatedDataHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {length ? <Results calculatedResults = {calculatedResults}/>: <div style={{textAlign: 'center'}}>Please enter all the values and hit the calculate button first!</div>}
      <Footer/>
    </div>
  );
}

export default App;
