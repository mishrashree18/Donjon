import React from "react";
import Note from "./Note";
import AddNote from "./Create";
import Search from "./Search";

const Hero = ({ notes, handleAddNote, handleDeleteNote, handleSearchNote }) => {
  return (
    <section className="hero">
      <nav className="flex flex-col space-y-2">
        <h1 className="text-green-300 text-center">Donjon</h1>
        <h4 className="text-gray-500 font-medium text-sm text-center">Dunjon is the best place to jot down quick thoughts or to save notes.</h4>
      </nav>

      <div className="bar text-green-300">
        <Search handleSearchNote={handleSearchNote} />
      </div>
      <body className="justify-center items-center flex">
        <div className="notes-list justify-center items-center mr-5 mt-3">
          {notes.map((note) => (
            <Note
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
          <AddNote handleAddNote={handleAddNote} />
        </div>
      </body>
    </section>
  );
};

export default Hero;
