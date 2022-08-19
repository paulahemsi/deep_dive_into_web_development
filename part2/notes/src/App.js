import { useState } from 'react'
import Note from "./components/Note.js"

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("a new note")
  //The event parameter is the event that triggers the call to the event handler function
  const addNote = (event) => {
    //The event handler immediately calls the event.preventDefault() method, which prevents the default action of submitting a form. The default action would, among other things, cause the page to reload.
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1 //This method works for our application since notes are never deleted.
    }
    //The method does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end. This is important since we must never mutate state directly in React!
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  
  //We have now registered an event handler to the onChange attribute of the form's input element:
  const handleNoteChange = (event) => {
    //The target property of the event object now corresponds to the controlled input element, and event.target.value refers to the input value of that element.
    setNewNote(event.target.value)
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
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
