import { useState } from 'react'

const Button = ({handleClick, title}) => {
  return (
  <button onClick={handleClick}>
    {title}
  </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td> 
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const totalFeedbacks = good + neutral + bad
  const average = (good - bad) / totalFeedbacks

  let positivePercentage = good * 100 / totalFeedbacks
  positivePercentage = positivePercentage ? positivePercentage : 0
  positivePercentage = `${positivePercentage} %`
  if (totalFeedbacks)
  {
    return (
      <table>
        <tbody>
            <StatisticsLine text="good" value={good}/> 
            <StatisticsLine text="neutral" value={neutral}/> 
            <StatisticsLine text="bad" value={bad}/> 
            <StatisticsLine text="all" value={totalFeedbacks}/> 
            <StatisticsLine text="average" value={average}/> 
            <StatisticsLine text="positive" value={positivePercentage}/>
        </tbody>
      </table>
    )
  }
  else
  {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => setGood(good + 1)
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  const handleBadFeedback = () => setBad(bad + 1)
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodFeedback} title="good"/>
      <Button handleClick={handleNeutralFeedback} title="neutral"/>
      <Button handleClick={handleBadFeedback} title="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
