import { useState } from 'react'

const Button = ({handleClick, title}) => {
  return (
  <button onClick={handleClick}>
    {title}
  </button>
  )
}

const Results = ({total, title}) => {
  return (
    <p>{title} {total}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const goodTitle = "good"
  const neutralTitle = "neutral"
  const badTitle = "bad"

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodFeedback} title={goodTitle}/>
      <Button handleClick={handleNeutralFeedback} title={neutralTitle}/>
      <Button handleClick={handleBadFeedback} title={badTitle}/>
      <h2>statistics</h2>
      <Results total={good} title={goodTitle}/>
      <Results total={neutral} title={neutralTitle}/>
      <Results total={bad} title={badTitle}/>
    </div>
  )
}

export default App
