import './App.css';
import Note from './components/Note';
import NoteInput from './components/NoteInput';
import Footer from './UI/Footer';
import Header from './UI/Header';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes(prevNote => {
      return [...prevNote, note];
    });
  }

  const deleteNote = id => {
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <NoteInput onAdd={addNote} />
      {notes.map((item,index) => <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote} /> )}
      <Footer /> 
    </div>
  );
}

export default App;
