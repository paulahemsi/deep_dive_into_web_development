const Header = ({ name }) => <h1>{name}</h1>

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
        {parts.map(part =>
          <Part part={part} />)}
    </div>
  )
}

const Course = ({ course }) => {
  return (
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    {/* <Total parts={course.parts}/> */}
  </div>
    
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
