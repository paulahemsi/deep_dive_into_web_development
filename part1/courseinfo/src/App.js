import { useState } from 'react'

//The component only uses the counter field of its props. This means we can simplify the component by using destructuring
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }
//The function defining the component contains only the return statement, so we can define the function using the more compact form of arrow functions:
// const Display = ({counter}) => {
//   return (
//     <div>{counter}</div>
//   )
// }
const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="plus"/>
      <Button onClick={setToZero} text="zero"/>
      <Button onClick={decreaseByOne} text="minus"/>
    </div>
  )
}


// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


// const Header = (props) => {
//   return(
//     <>
//       <h1>{props.name}</h1>
//     </>
//   )
// }

// const Part = (props) => {
//   return(
//     <p>
//       {props.name} {props.exercises}
//     </p>
//   )
// }

// const Content = (props) => {
//   console.log(props)
//   return(
//     <>
//         <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
//         <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
//         <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </>
//   )
// }

// const Total = (props) => {
//   return(
//     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
        
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header name={course.name}/>
//       <Content parts={course.parts}/>
//       <Total parts={course.parts}/>
//     </div>
//   )
// }

export default App
