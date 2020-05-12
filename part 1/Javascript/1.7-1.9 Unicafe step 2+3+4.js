import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) =>
    <button onClick={onClick}>
      {text}
    </button>

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {return <p>No Feedback given</p>}
  if (good+neutral+bad > 0) {
  return(
      <p>
      Good {good} <br/>
      Neutral {neutral} <br/>
      Bad {bad} <br/>
      Average {(good * 1 + bad * (-1)) / (good + neutral + bad)} <br/>
      Positive {good * 1 / bad * (-1)}
      </p>
  )
}
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral"/>
      <Button onClick={handleBad} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
