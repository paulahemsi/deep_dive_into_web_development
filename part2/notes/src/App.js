import { useState } from 'react'
import Note from "./components/Note.js"

const App = () => {
  const [notes, setNotes] = useState([])
  
  const addNote = (event) => {
    event.preventDefault()
    console.log('buton clicked', event.target)
  }
  
   return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
