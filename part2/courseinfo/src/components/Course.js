import React from "react"

const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ parts }) => {
  return (<p> <strong> Number of exercises {
    parts.reduce((sum, parts) => sum + parts.exercises, 0)
  }</strong></p>)
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
        {parts.map(part =>
          <Part part={part} key={part.id}/>)}
    </div>
  )
}

const Course = ({ course }) => {
  return (
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </div>
  )
}

export default Course
