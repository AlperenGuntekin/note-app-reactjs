import { useState } from "react";
import { nanoid } from 'nanoid';
import NoteList from "./components/NoteList";

const App = () => {

    const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "This is my first note!",
        date: "08.07.2022",
      },
      {
        id: nanoid(),
        text: "This is my second note!",
        date: "09.07.2022",
      },
      {
        id: nanoid(),
        text: "This is my third note!",
        date: "10.07.2022",
      },
      {
        id: nanoid(),
        text: "Alperen Guntekin",
        date: "12.06.2022",
      },
  
  
  ]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
  
      <div className="container">
        <NoteList 
        notes={notes} 
        handleAddNote={addNote}
        />
      </div>
    );
};

export default App;
