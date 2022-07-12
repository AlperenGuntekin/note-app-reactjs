import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList';
import Search from './components/Search';
import Header from './components/Header';

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

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

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

  const deleteNote = (id) => {

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
      
    <div className={`${darkMode && 'dark-mode'}`}>
       <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote = {setSearchText} />
        <NoteList 
        notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)     
          )} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
      </div>
     </div>
    );
};

export default App;
