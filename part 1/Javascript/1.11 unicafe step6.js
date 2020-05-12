import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) =>
    <button onClick={onClick}>
      {text}
    </button>

const Statistic =({text, value}) => 
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>

const Statistics = ({good, neutral, bad}) => {  
  if (good+neutral+bad === 0) {
    return (<>
    <h2>Statistics</h2>
    <p>No Feedback given</p>
    </>)
  }
  if (good+neutral+bad > 0) {
  return(
      <div>
        <h2>Statistics</h2>
        <table><tbody>
      <Statistic text="Good" value ={good}/> 
      <Statistic text="Neutral" value={neutral}/>
      <Statistic text="Bad" value={bad}/> 
      <Statistic text="Average" value={(good * 1 + bad * (-1)) / (good + neutral + bad)}/>
      <Statistic text="Positive" value={good * 100 / (bad+neutral+good) +"%"}/>
       </tbody></table>
      </div>
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