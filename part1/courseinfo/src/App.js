import { useState } from 'react'


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  
  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}













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
