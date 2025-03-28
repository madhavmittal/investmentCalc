import Header from './components/Header'
import './App.css'
import UserInput from './components/UserInput'
import { useState } from 'react'
import Results from './components/Results'

function App() {
  const[userInput, setUserInput] = useState({ initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10});

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput((prevUserInput) => {
        return {...prevUserInput, [inputId]: +newValue}
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {inputIsValid ? <Results input={userInput}/> : <p className='error'>Please enter a duration of at least 1 year.</p>}
    </>
  )
}

export default App
