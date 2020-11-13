import React from 'react';
import Footer from './footer';
import Header from './Header';
import Note from './Note';
import notes from '../note';


function App(){
    return (
        <div>
            <Header />
            {notes.map((noteItem) => (
                <Note 
                    key = {noteItem.key}
                    title = {noteItem.title}
                    content = {noteItem.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;