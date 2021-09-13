import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from './fire';
import Login from "./Login";
import './App.css';
import Hero from "./Hero";
import { nanoid } from 'nanoid';



function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('false');
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');

  };
  // const handleLogin = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/invalid-email":
  //         case "auth/user-disabled":
  //         case "auth/user-not-found":
  //           setEmailError(err.message);
  //           break;
  //         case "auth/wrong-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     });
  // };
  // const handleSignup = () => {
  //   clearErrors();
  //   fire
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .catch(err => {
  //       switch (err.code) {
  //         case "auth/email-already-in-use":
  //         case "auth/invalid-email":

  //           setEmailError(err.message);
  //           break;
  //         case "auth/weak-password":
  //           setPasswordError(err.message);
  //           break;
  //       }
  //     });

  // };
  // const handleLogout = () => {
  //   fire.auth().signOut();
  // };
  // const authListener = () => {
  //   fire.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       clearInputs();
  //       setUser(user);

  //     }
  //     else {
  //       setUser("");
  //     }
  //   });
  // };
  // useEffect(() => {
  //   authListener();

  // }, []);

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "15/04/2021"
  },
  {
    id: nanoid(),
    text: "This is my fourth note!",
    date: "15/04/2021"
  }]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
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




  return (
    <div className="App">
      {/* {user ? ( */}
        <Router>
          {/* <Switch> */}
            <Route exact path="/">

              <Hero 
                notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote} handleSearchNote={setSearchText} />
            </Route>

          {/* </Switch> */}
        </Router>
      {/* ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError} />

      )} */}


    </div>
  );
}

export default App;
