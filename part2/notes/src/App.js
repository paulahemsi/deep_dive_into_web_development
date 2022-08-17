import { useState } from 'react'
import Note from "./components/Note.js"

const App = () => {
  const [notes, setNotes] = useState([])
   return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
    </div>
  )
}

export default App
