import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(6).fill(0))
  const votes = [...vote]
  
  const randomNumber = () =>{
    const random = (Math.round(Math.random() * (anecdotes.length - 1)))
    setSelected(random)   
  }
  console.log(votes)

  const voting =(props)=>{
    votes[selected] += 1
    setVote(votes)
    console.log(votes)
    return votes
  }

  const Popular = () =>{
    const highestVote = Math.max(...votes)
    if (highestVote === 0) {return <p>No votes yet</p>}
    if (highestVote > 0){
      const currentQuote = votes.indexOf(highestVote)
      return (
        <>
        <h4>Most popular quote right now</h4>
        <p>{anecdotes[currentQuote]} </p>
        </>
      )
    }
  }

  return (
    <div>
      {props.anecdotes[selected]} <br/>
      <button onClick={randomNumber}>next anecdote!</button>
      <button onClick={voting} selected={selected}>Vote for this!</button>
      <Popular/>
    </div>
  )
}

const anecdotes = 
  ['If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.']

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)