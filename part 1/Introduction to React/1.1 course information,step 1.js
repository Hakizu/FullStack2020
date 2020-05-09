import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
  return (
    <div>
      <p>
        <h1>
          {props.course}
        </h1>
      </p>
    </div>   
  )
}

const Content = (props) => {
  return(
    <div>
      <p>
        {props.part1} {props.exercises1} <br />
        <br />
        {props.part2} {props.exercises2} <br />
        <br />
        {props.part3} {props.exercises3} <br />
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Total exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} 
        exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))