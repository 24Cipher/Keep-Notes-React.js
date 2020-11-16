import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, upNotes] = useState([]);

  function addNote(sometext) {
    upNotes((prev) => {
      return [...prev, sometext];
    });
  }

  function deleteNote(id) {
    upNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          remove={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
