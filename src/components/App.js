import React from 'react';
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {
  const contacts = [
    {
      id: "1",
      "name": "surya",
      "email": "surya@test.com"
    },
    {
      id: "2",
      "name": "surya",
      "email": "surya@test.com"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
